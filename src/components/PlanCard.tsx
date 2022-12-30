import {View, Text} from 'react-native';
import React from 'react';
import {dayColors} from '../utils/colors';
import {fontSizeSetting} from '../utils/fontSetting';

interface PlanCardProps {
  date: string;
  title: string;
  day: string;
  memo: string;
  fontSizePlus: boolean;
}

export default function PlanCard({
  date,
  title,
  day,
  memo,
  fontSizePlus,
}: PlanCardProps) {
  return (
    <View className="p-4 mb-4 bg-white w-full">
      <View>
        <Text className="font-bold text-lg">
          <Text className={`${dayColors(day)}`}>{day}</Text> / {title}
        </Text>
      </View>
      <View>
        <Text className="text-gray-500 text-sm mt-2">{date}</Text>
      </View>
      <View className="mt-2">
        <Text className={`${fontSizeSetting(fontSizePlus)}`}>{memo}</Text>
      </View>
    </View>
  );
}
