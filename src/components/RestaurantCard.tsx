import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface IRestaurantCardProps {
  name: string;
}

export default function RestaurantCard({name}: IRestaurantCardProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="mr-3 rounded-lg shadow bg-white"
      onPress={() =>
        navigation.navigate('RestaurantDetail', {
          // id,
        })
      }>
      <Image className="h-48 w-64 rounded-t-lg" />

      <View>
        <Text className="py-1 px-2 text-lg font-bold">{name}</Text>
        {/* <View className="flex-row"> */}
        {/* <View
            className={`px-2 py-1.5 mb-2 ml-2 ${regionColors(
              region,
            )} rounded-md w-14 flex-row justify-center`}>
            <Text>{region}</Text>
          </View> */}
        {/* <View
            className={`px-2 py-1.5 mb-2 mx-2 rounded-md w-14 flex-row justify-center ${dayColors(
              day,
            )} `}>
            <Text>{day}</Text>
          </View>
        </View>
        <View className="px-2 py-1.5 mb-2 mx-2 bg-gray-200 rounded-md w-20 flex-row justify-center">
          <Text>{pass}</Text>
        </View> */}
      </View>
    </TouchableOpacity>
  );
}
