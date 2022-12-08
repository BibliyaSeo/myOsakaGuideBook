import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {destinationImages} from '../utils/destinationImages';
import {dayColors, regionColors} from '../utils/colors';

export interface IDestinationCard {
  id: string;
  name: string;
  image: string;
  description: string;
  region: string;
  day: string;
  dayColor: string;
  pass: string;
  worktime: string;
  memo: string;
  googleMap: string;
}

export default function destinationCard({
  id,
  name,
  image,
  description,
  region,
  day,
  dayColor,
  pass,
  worktime,
  memo,
  googleMap,
}: IDestinationCard) {
  const navigation = useNavigation();

  const names = destinationImages.find((item: any) => {
    return item.name === image;
  });

  return (
    <TouchableOpacity
      className="mr-3 rounded-lg shadow bg-white"
      onPress={() =>
        navigation.navigate('DestinationDetail', {
          id,
        })
      }>
      <Image source={names?.require} className="h-48 w-64 rounded-t-lg" />

      <View>
        <Text className="py-1 px-2 text-lg font-bold">{name}</Text>
        <View className="flex-row">
          <View
            className={`px-2 py-1.5 mb-2 ml-2 ${regionColors(
              region,
            )} rounded-md w-14 flex-row justify-center`}>
            <Text>{region}</Text>
          </View>
          <View
            className={`px-2 py-1.5 mb-2 mx-2 rounded-md w-14 flex-row justify-center ${dayColors(
              dayColor,
            )} `}>
            <Text>{day}</Text>
          </View>
        </View>
        <View className="px-2 py-1.5 mb-2 mx-2 bg-gray-200 rounded-md w-20 flex-row justify-center">
          <Text>{pass}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
