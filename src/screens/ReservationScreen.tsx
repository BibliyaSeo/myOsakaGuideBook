import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {api} from '../api';
import MainTitle from '../components/MainTitle';

export default function ReservationScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <MainTitle title="OSAKA RESERVATION" />
      <ScrollView>
        <View className="px-5 py-2">
          <Text className="font-bold text-xl mb-2">예약</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
