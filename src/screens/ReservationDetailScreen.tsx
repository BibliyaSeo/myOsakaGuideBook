import {View, Text, TouchableOpacity, Linking, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ReservationCardProps} from '../components/ReservationCard';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IReservationDetailScreen {
  params: ReservationCardProps;
}
export default function ReservationDetailScreen() {
  const {
    params: {name, english, date, memo, url, url2, reservationNumber, type},
  }: IReservationDetailScreen = useRoute<any>();
  const navigation = useNavigation();

  console.log('url', url);
  console.log(url2);

  return (
    <View className="p-5">
      <View className="flex justify-between items-end py-1">
        <TouchableOpacity onPress={() => navigation.navigate('예약')}>
          <Ionicons name={'close'} size={40} color={'black'} />
        </TouchableOpacity>
      </View>
      <View className="flex items-center">
        <Text className="text-2xl font-bold">{name}</Text>
        <Text className="text-lg">{english}</Text>
      </View>

      <ScrollView className="py-6">
        <View className="border-b-0.5" />
        <View className="flex-row justify-between pt-6 mb-3">
          <Text className="text-gray-600 text-[16px]">테마</Text>
          <Text className="text-[16px]">{type}</Text>
        </View>
        <View className="flex-row justify-between mb-3">
          <Text className="text-gray-600 text-[16px]">예약 번호</Text>
          <Text className="text-[16px]">{reservationNumber}</Text>
        </View>
        <View className="flex-row justify-between mb-3">
          <Text className="text-gray-600 text-[16px]">예약 일시</Text>
          <Text className="text-[16px]">{date}</Text>
        </View>

        {url !== null && (
          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-600 text-[16px]">참고 링크</Text>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
              <Text className="text-[16px]">참고 확인하기</Text>
            </TouchableOpacity>
          </View>
        )}

        {url2 !== null && (
          <View className="flex-row justify-between mb-3">
            <Text className="text-gray-600 text-[16px]">예약 링크</Text>
            <TouchableOpacity onPress={() => Linking.openURL(url2)}>
              <Text className="text-[16px]">예약 확인하기</Text>
            </TouchableOpacity>
          </View>
        )}

        <View className="p-2 border-b-0.5" />
        <View className="pt-4">
          <Text className="text-[16px]">{memo}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
