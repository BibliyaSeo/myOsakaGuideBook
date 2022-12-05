import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import {IDestinationCard} from '../components/DestinationCard';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useBottomBarHeight} from '../hooks/useBottomBarHeight';

interface IDestiantionDetailScreen {
  params: IDestinationCard;
}

export default function DestinationDetailScreen() {
  const navigation = useNavigation();
  const {
    params: {
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
    },
  }: IDestiantionDetailScreen = useRoute<any>();
  const bottomBarHeight = useBottomBarHeight;

  return (
    <SafeAreaView className={`pb-[${bottomBarHeight}px]`}>
      <View className="flex-row space-x-3 items-center py-1 px-2">
        <TouchableOpacity
          className=""
          onPress={() => navigation.navigate('관광명소')}>
          <Ionicons name={'ios-arrow-back'} size={40} color={'black'} />
        </TouchableOpacity>
        <View>
          <Text className="text-xl font-bold">관광명소</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <Image source={{uri: `${image}`}} className="h-56 w-full" />
        </View>
        <View className="p-4">
          <Text className="text-xl font-bold mb-2">{name}</Text>
          <View className="flex-row space-x-2">
            <View
              className={`py-1.5 mb-2 ${
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
            <View className="px-2 py-1.5 mb-2 bg-green-200 rounded-md w-14 flex-row justify-center">
              <Text>{day}</Text>
            </View>
            <View className="px-2 py-1.5 mb-2 bg-gray-200 rounded-md w-20 flex-row justify-center">
              <Text>{pass}</Text>
            </View>
          </View>
          <View className="border-b h-2 border-gray-300"></View>
          <View className="py-4">
            <View className="mb-2">
              <Text>영업시간: {worktime}</Text>
            </View>
            <Text>{description}</Text>
          </View>
          <View className="border-b h-2 border-gray-300"></View>
          <View className="py-2 mt-1.5">
            <Text>메모: {memo}</Text>
          </View>
          <View className="border-t border-gray-300"></View>
          <View className="pt-2 flex-row items-center">
            <View className="flex justify-center mr-2">
              <TouchableOpacity onPress={() => Linking.openURL(googleMap)}>
                <Text>{name} 구글맵</Text>
              </TouchableOpacity>
            </View>
            <Ionicons name={'open-outline'} size={20} color={'gray'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
