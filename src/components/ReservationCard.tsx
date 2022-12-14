import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import TypeIcon from './TypeIcon';

interface ReservationCardProps {
  name: string;
  date: string;
  memo: string;
  url: string;
  reservationNumber: string;
  type: string;
}

export default function ReservationCard({
  name,
  date,
  memo,
  url,
  reservationNumber,
  type,
}: ReservationCardProps) {
  const navigation = useNavigation();

  return (
    <View className="p-4 border border-gray-200 mb-4 rounded-lg">
      <View className="pb-4 border-b border-gray-200 flex-row space-x-4 items-center">
        <TypeIcon type={type} />
        <Text className="text-[16px] font-semibold">{name}</Text>
      </View>
      <View className="pt-2 space-y-1">
        <Text className="mt-2 text-end">{date}</Text>
        <Text>인원 4명</Text>
        <View>
          <Text className="mt-4 text-[15px] font-semibold text-green-800">
            예약 확정
          </Text>
        </View>
        <View>
          <Text className="mt-3">
            <TouchableOpacity className="border-0.5 py-2 px-3 rounded-xl">
              <Text
                onPress={() => navigation.navigate('ReservationDetail')}
                className="text-center">
                자세히 보기
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>

      {/* <Text>{date}</Text>
      <Text>{type}</Text>
      <Text>{reservationNumber}</Text>
      <Text>{memo}</Text>
      <Text>{url}</Text> */}
    </View>
  );
}
