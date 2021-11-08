import styled from 'styled-components';
import Ripple from 'react-native-material-ripple';
import { shade } from 'polished';

export const GoBackButtonContainer = styled(Ripple)`
  background: ${shade(0.5, '#5065a8')};
  border-top-width: 1px;
  border-color: #232129;
  height: 50px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const GoBackButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: 'Nunito-Bold';
`;
