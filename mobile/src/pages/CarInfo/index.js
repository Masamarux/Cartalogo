import React, { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import formatMoney from 'accounting-js/lib/formatMoney';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  CarContainer,
  CarContainerInfo,
  CarNome,
  CarMarca,
  CarModelo,
  CarPreco,
  CarFoto,
  AdminContainer,
  AdminText,
  EditButton,
  EditButtonText,
  DeleteButton,
  DeleteButtonText,
} from './style';

import GoBackButton from '../../components/GoBackButton';

import placeholderImage from '../../assets/placeholderImages/placeholder1.jpg';

const CarInfo = () => {
  const route = useRoute();
  const [car, setCar] = useState({});
  const { user, token } = useAuth();
  const navigator = useNavigation();

  const deleteCar = useCallback(
    async (id) => {
      try {
        if (id) {
          await api.delete(`/cars/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: {},
          });

          await Alert.alert('Deletado com sucesso');
          await navigator.goBack();
        }
      } catch (error) {
        Alert.alert('Deleção falhou', 'Verifique seu token');
      }
    },
    [navigator, token],
  );

  const getCar = useCallback(async () => {
    const carRawData = await api.get(`/cars/${route.params.id}`);
    if (carRawData.data.foto) {
      const fotoURL = await api.get(`/images/${carRawData.data.foto}`);

      carRawData.data.foto = await fotoURL.request?.responseURL;
    }
    await setCar(carRawData.data);
  }, [route?.params.id]);

  const showAlert = useCallback(
    async () =>
      Alert.alert(
        'Atenção',
        'Deseja continuar a deleção?',
        [
          {
            text: 'Cancelar',
            onPress: () => Alert.alert('Deleção cancelada'),
            style: 'default',
          },
          {
            text: 'Confirmar',
            onPress: async () => {
              await deleteCar(car.id);
            },
            style: 'default',
          },
        ],
        {
          cancelable: true,
          onDismiss: () => Alert.alert('Processo cancelado.'),
        },
      ),
    [car, deleteCar],
  );

  const renderCarData = useCallback(
    () => (
      <>
        <CarContainer>
          <CarFoto source={car?.foto ? { uri: car.foto } : placeholderImage} />
          <CarContainerInfo>
            <CarNome>Nome: {car.nome}</CarNome>
            <CarModelo>Modelo: {car.modelo}</CarModelo>
            <CarMarca>Marca: {car.marca}</CarMarca>
            <CarPreco>
              Valor:{' '}
              {formatMoney(car.preco, {
                symbol: 'R$ ',
                precision: 2,
                thousand: '.',
                decimal: ',',
              })}
            </CarPreco>
            {user?.is_admin ? (
              <AdminContainer>
                <AdminText>Área do admin:</AdminText>
                <EditButton
                  onPress={() => navigator.navigate('UpdateCar', car)}
                >
                  <EditButtonText>Atualizar carro</EditButtonText>
                </EditButton>
                <DeleteButton onPress={() => showAlert()}>
                  <DeleteButtonText>Deletar carro</DeleteButtonText>
                </DeleteButton>
              </AdminContainer>
            ) : null}
          </CarContainerInfo>
        </CarContainer>
        <GoBackButton onPress={() => navigator.goBack()}>Voltar</GoBackButton>
      </>
    ),
    [car, user, navigator, showAlert],
  );

  useEffect(() => {
    getCar();
  }, [getCar]);

  useEffect(() => {
    navigator.addListener('focus', () => getCar());
  }, [getCar, navigator]);

  return <Container>{car ? renderCarData() : null}</Container>;
};

export default CarInfo;
