import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import MainTitle from '../components/MainTitle';

export default function InfoScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <MainTitle title="OSAKA INFO" />
      <ScrollView>
        <View className="px-5 py-2">
          <Text className="font-bold text-xl mb-2">정보</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
