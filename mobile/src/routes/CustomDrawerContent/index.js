import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

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

  return (
    <DrawerContentScrollView {...props}>
      {user ? (
        <UserContainer>
          <LogoImage source={logo} />
          <WelcomeText>Bem vindo ao Cartálogo!</WelcomeText>
          <UserName>{user.name}</UserName>
          <UserEmail>{user.email}</UserEmail>
          <ButtonLogout onPress={signOut}>
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
