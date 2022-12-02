import {View, Text} from 'react-native';
import React from 'react';

interface IMainTitle {
  title: string;
}

export default function MainTitle({title}: IMainTitle) {
  return (
    <View className="px-5 py-3">
      <Text className="text-2xl font-extrabold">{title}</Text>
    </View>
  );
}
