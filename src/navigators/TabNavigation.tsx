import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TouristDestinationScreen from '../screens/TouristDestinationScreen';
import PlanScreen from '../screens/PlanScreen';
import ReservationScreen from '../screens/ReservationScreen';
import InfoScreen from '../screens/InfoScreen';
import PayScreen from '../screens/PayScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {mainColor} from '../utils/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: mainColor,
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === '관광명소') {
            return (
              <Ionicons
                name={'gift'}
                size={20}
                color={focused ? mainColor : 'gray'}
              />
            );
          }
          if (route.name === '일정') {
            return (
              <Ionicons
                name={'ios-airplane'}
                size={20}
                color={focused ? mainColor : 'gray'}
              />
            );
          }
          if (route.name === '예약') {
            return (
              <Ionicons
                name={'bookmarks'}
                size={20}
                color={focused ? mainColor : 'gray'}
              />
            );
          }
          if (route.name === '가계부') {
            return (
              <Ionicons
                name={'journal'}
                size={20}
                color={focused ? mainColor : 'gray'}
              />
            );
          }
          if (route.name === '정보') {
            return (
              <Ionicons
                name={'information-circle-sharp'}
                size={20}
                color={focused ? mainColor : 'gray'}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="관광명소" component={TouristDestinationScreen} />
      <Tab.Screen name="일정" component={PlanScreen} />
      <Tab.Screen name="예약" component={ReservationScreen} />
      <Tab.Screen name="가계부" component={PayScreen} />
      {/* <Tab.Screen name="정보" component={InfoScreen} /> */}
    </Tab.Navigator>
  );
}
