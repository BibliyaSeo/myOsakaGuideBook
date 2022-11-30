import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TouristDestinationScreen from '../screens/TouristDestinationScreen';
import PlanScreen from '../screens/PlanScreen';
import ReservationScreen from '../screens/ReservationScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="TouristDestination"
        component={TouristDestinationScreen}
      />
      <Tab.Screen name="Plan" component={PlanScreen} />
      <Tab.Screen name="Reservation" component={ReservationScreen} />
    </Tab.Navigator>
  );
}
