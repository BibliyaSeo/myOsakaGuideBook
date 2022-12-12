import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screens/IntroScreen';
import TabNavigation from './TabNavigation';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen';
import DestinationDetailScreen from '../screens/DestinationDetailScreen';
import ReservationDetailScreen from '../screens/ReservationDetailScreen';

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

      <Stack.Screen
        name="DestinationDetail"
        component={DestinationDetailScreen}
        options={{
          presentation: 'fullScreenModal',
        }}
      />

      <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
        options={{
          presentation: 'fullScreenModal',
        }}
      />

      <Stack.Screen
        name="ReservationDetail"
        component={ReservationDetailScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}
