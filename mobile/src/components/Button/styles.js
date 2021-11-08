import styled from 'styled-components';
import Ripple from 'react-native-material-ripple';

export const ButtonContainer = styled(Ripple)`
  width: 100%;
  height: 70px;
  background: #f2eee4;
  border-radius: 10px;

  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-Bold';
  color: #5065a8;
  font-size: 18px;
`;
