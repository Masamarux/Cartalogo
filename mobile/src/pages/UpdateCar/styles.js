import styled from 'styled-components';
import Ripple from 'react-native-material-ripple';
import { Form as Unform } from '@unform/mobile';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background: #5065a8;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-family: 'Nunito-Bold';
  color: #f2eee4;
  text-align: center;

  margin-bottom: 15px;
`;
export const IdVeiculo = styled.Text`
  font-size: 18px;
  font-family: 'Nunito-Regular';
  color: #f2eee4;

  margin-bottom: 20px;
`;

export const Form = styled(Unform)`
  width: 100%;
  padding: 5px;
`;

export const UpdateFotoButton = styled(Ripple)`
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #f2eee4;
  border-radius: 10px;
  margin-bottom: 20px;

  flex-direction: row;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;

export const UpdateFotoButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  color: #5065a8;
  font-size: 18px;
`;
