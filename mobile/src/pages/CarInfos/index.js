import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CarInfo = () => {
  const route = useRoute();

  return (
    <View>
      <Text>{route.params?.carId}</Text>
    </View>
  );
};

export default CarInfo;
