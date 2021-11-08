import React, { useState, useEffect } from 'react';
import { FlatList, Text, Button } from 'react-native';
import formatMoney from 'accounting-js/lib/formatMoney';

import api from '../../services/api';

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
} from './styles';

import placeholderImage from '../../assets/placeholderImages/placeholder1.jpg';

const Home = () => {
  const [carList, setCarList] = useState([]);

  const sortCars = (array) => {
    const sortedArray = array.sort((a, b) => {
      return a.preco - b.preco;
    });

    return sortedArray;
  };

  useEffect(() => {
    const getCars = async () => {
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
    };

    getCars();
  }, []);

  return (
    <Container>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={carList}
        renderItem={({ item }) => (
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
                  symbol: 'R$',
                  precision: 2,
                  thousand: '.',
                  decimal: ',',
                })}
              </CarPreco>
            </CarInfosContainer>
          </Car>
        )}
      />
    </Container>
  );
};

export default Home;
