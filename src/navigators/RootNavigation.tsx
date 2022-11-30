import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screens/IntroScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  );
}
