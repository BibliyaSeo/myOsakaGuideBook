import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function destinationCard({name}: any) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white shadow mr-3"
      onPress={() => navigation.navigate('Detail')}>
      {/* <Image source={{}} /> */}
      <View>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
