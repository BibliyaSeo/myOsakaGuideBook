import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {restaurantImages} from '../utils/restaurantImages';
import {menuColors, regionColors} from '../utils/colors';

interface IRestaurantCardProps {
  id: string;
  name: string;
  image: string;
  region: string;
  menu: any;
}

export default function RestaurantCard({
  id,
  name,
  image,
  region,
  menu,
}: IRestaurantCardProps) {
  const navigation = useNavigation();

  const names = restaurantImages.find((item: any) => {
    return item.name === image;
  });

  return (
    <TouchableOpacity
      className="mr-3 rounded-lg bg-white"
      onPress={() =>
        navigation.navigate('RestaurantDetail', {
          id,
        })
      }>
      <Image source={names?.require} className="h-48 w-64 rounded-t-lg" />
      <View className="py-2">
        <Text className="py-1 px-2 text-lg font-bold">{name}</Text>
        <View className="flex-row space-x-2">
          <View
            className={`px-2 py-1.5 mb-2 ml-2 ${regionColors(
              region,
            )} rounded-md flex-row justify-center`}>
            <Text>{region}</Text>
          </View>
          <View
            className={`px-2 py-1.5 mb-2 ml-2 rounded-md flex-row justify-center ${menuColors(
              menu,
            )}`}>
            <Text>{menu}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
