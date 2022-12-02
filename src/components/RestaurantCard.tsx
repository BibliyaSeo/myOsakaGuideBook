import {View, Text} from 'react-native';
import React from 'react';

interface IRestaurantCardProps {
  name: string;
}

export default function RestaurantCard({name}: IRestaurantCardProps) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}
