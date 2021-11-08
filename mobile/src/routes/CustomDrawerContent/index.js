import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import {
  UserContainer,
  UserName,
  UserEmail,
  ButtonLogout,
  ButtonLogoutText,
  LogoImage,
  WelcomeText,
} from './styles';

import logo from '../../assets/logo.png';

const CustomDrawerContent = (props) => {
  const { user, signOut } = useAuth();
  const navigator = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      {user ? (
        <UserContainer>
          <LogoImage source={logo} />
          <WelcomeText>Bem vindo ao Cartálogo!</WelcomeText>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
          <ButtonLogout
            onPress={() => {
              signOut();
              navigator?.navigate('Home');
            }}
          >
            <ButtonLogoutText>Logout</ButtonLogoutText>
          </ButtonLogout>
        </UserContainer>
      ) : (
        <UserContainer>
          <LogoImage source={logo} />
          <WelcomeText>Faça seu login</WelcomeText>
        </UserContainer>
      )}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
