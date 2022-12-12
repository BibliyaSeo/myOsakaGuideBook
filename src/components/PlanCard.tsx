import {View, Text} from 'react-native';
import React from 'react';
import {dayColors} from '../utils/colors';

interface PlanCardProps {
  date: string;
  title: string;
  day: string;
  memo: string;
}

export default function PlanCard({date, title, day, memo}: PlanCardProps) {
  return (
    <View className="p-4 mb-4 shadow rounded-lg bg-white w-full">
      <View>
        <Text className="font-bold text-lg">
          <Text className={`${dayColors(day)}`}>{day}</Text> /
          <Text> {title}</Text>
        </Text>
        <Text className="text-gray-500 text-xs mt-1">{date}</Text>
      </View>
      <View className="mt-2">
        <Text>{memo}</Text>
      </View>
    </View>
  );
}
