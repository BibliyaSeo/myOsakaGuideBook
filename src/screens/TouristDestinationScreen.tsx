import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {destinationList} from '../osakadatas/destinationList';
import DestinationCard from '../components/DestinationCard';

export default function TouristDestinationScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 py-3 bg-sky-300">
        <Text className="text-xl font-extrabold">OSAKA</Text>
      </View>
      <ScrollView>
        <View className="px-5 py-2">
          <Text className="text-bold">DAY 1</Text>
          {/* 카드영역 */}
          {destinationList.map(item => (
            <DestinationCard key={item.id} name={item.name} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
