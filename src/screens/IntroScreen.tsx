import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function IntroScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
        <Text>여행 시작하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
