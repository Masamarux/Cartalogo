import styled from 'styled-components';
import { shade } from 'polished';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;

  height: 55px;
  width: 100%;
  background: #f2eee4;
  border-radius: 10px;

  padding: 0 15px;

  margin-bottom: 10px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${shade(0.5, '#5065a8')};
  font-size: 18px;
  font-family: 'Nunito-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
