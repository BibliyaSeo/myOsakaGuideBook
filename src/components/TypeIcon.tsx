import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface TypeIconProps {
  type: string;
}

export default function TypeIcon({type}: TypeIconProps) {
  return type === '교통' ? (
    <Ionicons name="ios-bus" size={20} color={'blue'} />
  ) : type === '숙소' ? (
    <Ionicons name="home" size={20} color={'green'} />
  ) : type === '관광' ? (
    <Ionicons name="planet" size={20} color={'pink'} />
  ) : type === '식당' ? (
    <Ionicons name="restaurant" size={20} color={'red'} />
  ) : type === '간식' ? (
    <Ionicons name="pizza" size={20} color={'red'} />
  ) : type === '쇼핑' ? (
    <Ionicons name="pizza" size={20} color={'red'} />
  ) : null;
}
