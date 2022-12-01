import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function destinationCard({name}: any) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}
