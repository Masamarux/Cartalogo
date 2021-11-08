import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CarInfo from '../pages/CarInfo';
import CreateCar from '../pages/CreateCar';
import UpdateCar from '../pages/UpdateCar';

import CustomDrawerContent from './CustomDrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CarInfo" component={CarInfo} />
      <Stack.Screen name="CreateCar" component={CreateCar} />
      <Stack.Screen name="UpdateCar" component={UpdateCar} />
    </Stack.Navigator>
  );
};

const PublicRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="App"
      screenOptions={{
        headerTintColor: '#5065A8',
        headerStyle: {
          backgroundColor: '#f2eee4',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: 'Righteous-Regular',
        },
        drawerStyle: {
          backgroundColor: '#5065A8',
          width: 225,
        },
        drawerItemStyle: {
          backgroundColor: '#f2eee4',
        },
        drawerLabelStyle: {
          color: '#5065A8',
          fontSize: 16,
          fontFamily: 'Righteous-Regular',
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Cartálogo" component={StackRoutes} />
      <Drawer.Screen name="SignIn" component={SignIn} />
      <Drawer.Screen name="SignUp" component={SignUp} />
    </Drawer.Navigator>
  );
};

export default PublicRoutes;
