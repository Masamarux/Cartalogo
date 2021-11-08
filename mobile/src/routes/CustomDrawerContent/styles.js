import styled from 'styled-components';
import Ripple from 'react-native-material-ripple';

export const UserContainer = styled.View`
  justify-content: center;
  align-items: center;

  width: 205px;
  height: 300px;
  background: #f2eee4;
  border-radius: 5px;
  margin: 10px 10px 10px 10px;
`;

export const UserName = styled.Text`
  font-family: 'Righteous-Regular';
  font-size: 24px;
  color: #5065a8;
`;

export const UserEmail = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 16px;
  color: #5065a8;

  margin-bottom: 20px;
`;

export const ButtonLogout = styled(Ripple)`
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 50px;
  background: #5065a8;
`;

export const ButtonLogoutText = styled.Text`
  font-family: 'Nunito-Bold';
  font-size: 18px;
  color: #f2eee4;
`;

export const LogoImage = styled.Image`
  height: 110px;
  width: 110px;
`;

export const WelcomeText = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 16px;
  color: #5065a8;
`;
