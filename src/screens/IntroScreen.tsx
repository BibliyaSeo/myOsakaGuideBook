import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Animation from '../components/Animation';

export default function IntroScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View className="flex h-full justify-center">
        <View className="flex items-center mb-8">
          <Text className="text-4xl italic font-bold">
            <Text className="text-pink-500">S</Text>eo's Family
          </Text>
          <Text className="text-4xl italic font-bold">Osaka Travel</Text>
        </View>
        <View className="h-1/3">
          <Animation />
        </View>
        <View className="flex items-center mt-8">
          <TouchableOpacity
            onPress={() => navigation.navigate('Tab')}
            className="py-2 px-4 bg-pink-500 rounded-xl shadow-lg">
            <Text className="text-xl font-bold text-white">여행 시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
