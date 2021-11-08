import styled from 'styled-components';
import { shade } from 'polished';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;

  width: 100%;
  padding: 2px 10px 0 10px;
  background-color: #5065a8;
`;

export const UserContainer = styled.ScrollView``;

export const Car = styled.View`
  width: 100%;
  background-color: #f2eee4;

  border-radius: 5px;

  margin-bottom: 10px;
`;

export const CarFoto = styled.Image`
  height: 250px;
  width: 100%;
`;

export const CarInfosContainer = styled.View`
  margin: 10px;
  min-height: 80px;
`;

export const CarNomeModeloContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const CarNome = styled.Text`
  font-size: 20px;
  font-family: 'Nunito-Bold';
  color: #687ab6;
`;

export const CarModelo = styled.Text`
  font-size: 18px;
  font-family: 'Nunito-Regular';
  color: #687ab6;

  margin-left: 5px;
`;

export const CarMarca = styled.Text`
  font-size: 18px;
  font-family: 'Nunito-Regular';
  color: #888888;
`;

export const CarPreco = styled.Text`
  font-size: 22px;
  font-family: 'Nunito-Bold';
  color: #5065a8;
`;

export const CreateCarButton = styled(Ripple)`
  height: 50px;
  width: 50px;
  background: #00ff7f;
  border-width: 1px;
  border-color: ${shade(0.2, '#00ff7f')};
  border-radius: 25px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 5px;

  justify-content: center;
  align-items: center;
`;

export const CreateCarButtonIcon = styled(Icon)``;
