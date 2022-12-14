import {View, Text} from 'react-native';
import React from 'react';
import {dayColors, typeColors} from '../utils/colors';
import TypeIcon from './TypeIcon';

interface PayCardProps {
  list: string;
  date: string;
  day: string;
  memo: string;
  type: string;
  won: number;
  yen: number;
}

export default function PayCard({
  list,
  date,
  day,
  memo,
  type,
  won,
  yen,
}: PayCardProps) {
  return (
    <View className="py-2 px-4 bg-white">
      <View>
        <View className="flex-row space-x-4 items-center">
          <TypeIcon type={type} />
          <Text className="font-semibold text-lg">{list}</Text>
        </View>
        <View className="flex-row justify-between my-0.5">
          <Text className="text-sm text-gray-500">{date}</Text>
          <View className="flex-row space-x-2">
            <View className={`${typeColors(type)} py-1 px-2 rounded-md`}>
              <Text>{type}</Text>
            </View>
            <View className={`${dayColors(day)} py-1 px-2 rounded-md`}>
              <Text>{day}</Text>
            </View>
          </View>
        </View>

        <Text>{memo}</Text>
        <View className="flex-row justify-end">
          {won !== 0 && (
            <Text className="font-semibold">
              {won?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Text>
          )}
          {yen !== 0 && (
            <Text className="font-semibold">
              {yen?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}엔
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
