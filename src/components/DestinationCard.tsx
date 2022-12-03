import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export interface IDestinationCard {
  id: string;
  name: string;
  image: string;
  description: string;
  region: string;
  day: string;
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
  pass,
  worktime,
  memo,
  googleMap,
}: IDestinationCard) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white shadow mr-3 rounded-lg"
      onPress={() =>
        navigation.navigate('DestinationDetail', {
          id,
          name,
          image,
          description,
          region,
          day,
          pass,
          worktime,
          memo,
          googleMap,
        })
      }>
      <Image source={{uri: `${image}`}} className="h-48 w-64 rounded-t-lg" />
      <View>
        <Text className="py-1 px-2 text-lg font-bold">{name}</Text>
        <View className="flex-row">
          <View
            className={`px-2 py-1.5 mb-2 ml-2 ${
              region === '오사카'
                ? 'bg-red-200'
                : region === '고베'
                ? 'bg-sky-200'
                : region === '교토'
                ? 'bg-yellow-200'
                : 'bg-white'
            } rounded-md w-14 flex-row justify-center`}>
            <Text>{region}</Text>
          </View>
          <View className="px-2 py-1.5 mb-2 mx-2 bg-green-200 rounded-md w-14 flex-row justify-center">
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
