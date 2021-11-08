import React, { useRef, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  View,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import * as Yup from 'yup';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';
import GoBackButton from '../../components/GoBackButton';

import {
  Container,
  Title,
  IdVeiculo,
  Form,
  UpdateFotoButton,
  Icon,
  UpdateFotoButtonText,
} from './styles';

const UpdateCar = () => {
  const formRef = useRef(null);
  const route = useRoute();
  const { token } = useAuth();
  const navigator = useNavigation();

  const handleUpdateImage = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione uma imagem',
        cancelBurronTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      (response) => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao atualizar a Foto');
          return;
        }

        const data = new FormData();

        data.append('foto', {
          type: 'image/jpeg',
          name: `${route?.params.id}.jpg`,
          uri: response.uri,
        });

        api
          .patch(`/cars/${route?.params.id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
          })
          .then((apiResponse) => {
            console.log(apiResponse.status);
          });
      },
    );
  }, [route?.params.id, token]);

  const handleUpdate = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome: Yup.string().required('Nome é obrigatório'),
          marca: Yup.string().required('Marca é obrigatória'),
          modelo: Yup.string().required('Modelo é obrigatório'),
          preco: Yup.number().required('Preço é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        data.preco = Number(data.preco);

        await api.put(`/cars/${route.params.id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        });

        Alert.alert('Atualização de veículo realizada com sucesso!');

        navigator.goBack();
      } catch (error) {
        Alert.alert('Erro na Atualização', 'Cheque as informações');
      }
    },
    [navigator, token, route?.params.id],
  );
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <View>
              <Title>Atualizar veículo de id:</Title>
              <IdVeiculo>{route?.params.id}</IdVeiculo>
            </View>

            <Form
              ref={formRef}
              onSubmit={handleUpdate}
              initialData={{
                nome: route.params.nome,
                marca: route.params.marca,
                modelo: route.params.modelo,
                preco: route.params.preco.toString(),
              }}
            >
              <Input name="nome" placeholder="Nome do veículo" icon="disc" />
              <Input name="marca" placeholder="Marca do veículo" icon="box" />
              <Input
                name="modelo"
                placeholder="Modelo do veículo"
                icon="award"
              />
              <Input
                keyboardType="decimal-pad"
                name="preco"
                placeholder="Valor do veículo"
                icon="dollar-sign"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <UpdateFotoButton onPress={handleUpdateImage}>
                <Icon name="image" size={20} />
                <UpdateFotoButtonText>
                  Atualizar foto do veículo
                </UpdateFotoButtonText>
              </UpdateFotoButton>
              <Button onPress={() => formRef.current.submitForm()}>
                Atualizar veículo
              </Button>
            </Form>
          </Container>
        </ScrollView>
        <GoBackButton onPress={() => navigator.goBack()}>Voltar</GoBackButton>
      </KeyboardAvoidingView>
    </>
  );
};

export default UpdateCar;
