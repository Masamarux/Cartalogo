import styled from 'styled-components';
import { shade, lighten } from 'polished';
import Ripple from 'react-native-material-ripple';

export const Container = styled.View`
  flex: 1;
  // align-items: center;

  background: #5065a8;
`;

export const CarContainer = styled.View`
  flex: 1;
  margin: 5px;
  border-radius: 10px;
  background: #f2eee4;
`;

export const CarContainerInfo = styled.View`
  flex: 1;

  padding: 15px;
`;

export const CarNome = styled.Text`
  font-size: 28px;
  font-family: 'Nunito-Regular';
  color: #5065a8;
`;

export const CarMarca = styled.Text`
  font-size: 28px;
  font-family: 'Nunito-Regular';
  color: #5065a8;
`;

export const CarModelo = styled.Text`
  font-size: 28px;
  font-family: 'Nunito-Regular';
  color: #5065a8;
`;

export const CarPreco = styled.Text`
  font-size: 28px;
  font-family: 'Nunito-Regular';
  color: #5065a8;
`;

export const CarFoto = styled.Image`
  height: 250px;
  width: 100%;
`;

export const GoBackButton = styled(Ripple)`
  background: #5065a8;
  height: 30px;
  width: 100%;

  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
`;

export const GoBackButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Nunito-Bold';
  color: #f2eee4;
`;

export const AdminContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  padding: 10px;
  background: ${shade(0.5, '#5065a8')};
`;

export const AdminText = styled.Text`
  font-size: 28px;
  font-family: 'Nunito-Bold';
  color: #f2eee4;

  margin-bottom: 20px;
`;

export const EditButton = styled(Ripple)`
  background: ${lighten(0.2, '#0000FF')};
  height: 40px;
  width: 100%;

  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
`;

export const EditButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Nunito-Regular';
  color: #f2eee4;
`;

export const DeleteButton = styled(Ripple)`
  background: ${lighten(0.1, '#ff0e0e')};
  height: 40px;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const DeleteButtonText = styled.Text`
  font-size: 18px;
  font-family: 'Nunito-Regular';
  color: #f2eee4;
`;
