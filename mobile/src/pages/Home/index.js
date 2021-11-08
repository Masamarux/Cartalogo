import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, TouchableWithoutFeedback } from 'react-native';
import formatMoney from 'accounting-js/lib/formatMoney';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Car,
  CarFoto,
  CarInfosContainer,
  CarNomeModeloContainer,
  CarNome,
  CarModelo,
  CarMarca,
  CarPreco,
  CreateCarButton,
  CreateCarButtonIcon,
} from './styles';

import placeholderImage from '../../assets/placeholderImages/placeholder1.jpg';

const Home = () => {
  const [carList, setCarList] = useState([]);
  const navigator = useNavigation();
  const { user } = useAuth();

  const sortCars = (array) => {
    const sortedArray = array.sort((a, b) => {
      return a.preco - b.preco;
    });

    return sortedArray;
  };

  const getCars = useCallback(async () => {
    const carsRawData = await api.get('/cars');

    const carsPromises = await carsRawData.data.map(async (car) => {
      if (car.foto) {
        const fotoURL = await api.get(`/images/${car.foto}`);

        car.foto = fotoURL.request?.responseURL;
      }
      return car;
    });

    const cars = await Promise.all(carsPromises);
    setCarList(sortCars(cars));
  }, []);

  useEffect(() => {
    getCars();
  }, [getCars]);

  useEffect(() => {
    navigator.addListener('focus', () => getCars());
  }, [getCars, navigator]);

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={carList}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => {
              navigator.navigate('CarInfo', {
                id: item.id,
              });
            }}
          >
            <Car key={item.id}>
              <CarFoto
                source={item.foto ? { uri: item.foto } : placeholderImage}
              />
              <CarInfosContainer>
                <CarNomeModeloContainer>
                  <CarNome>{item.nome}</CarNome>
                  <CarModelo>{item.modelo}</CarModelo>
                </CarNomeModeloContainer>
                <CarMarca>{item.marca}</CarMarca>
                <CarPreco>
                  {formatMoney(item.preco, {
                    symbol: 'R$ ',
                    precision: 2,
                    thousand: '.',
                    decimal: ',',
                  })}
                </CarPreco>
              </CarInfosContainer>
            </Car>
          </TouchableWithoutFeedback>
        )}
      />
      {user?.is_admin && (
        <CreateCarButton onPress={() => navigator.navigate('CreateCar')}>
          <CreateCarButtonIcon name="plus" size={25} />
        </CreateCarButton>
      )}
    </Container>
  );
};

export default Home;
