import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface TypeIconProps {
  type: string;
}

export default function TypeIcon({type}: TypeIconProps) {
  return type === '교통' ? (
    <Ionicons name="bus" size={20} color={'#0284c7'} />
  ) : type === '비행기' ? (
    <Ionicons name="airplane" size={20} color={'#0369a1'} />
  ) : type === '숙소' ? (
    <Ionicons name="home" size={20} color={'#84cc16'} />
  ) : type === '관광' ? (
    <Ionicons name="heart" size={20} color={'#f87171'} />
  ) : type === '식당' ? (
    <Ionicons name="restaurant" size={20} color={'#fbbf24'} />
  ) : type === '간식' ? (
    <Ionicons name="cafe" size={20} color={'#ea580c'} />
  ) : type === '쇼핑' ? (
    <Ionicons name="basket" size={20} color={'#fda4af'} />
  ) : type === '기타' ? (
    <Ionicons name="ios-ellipsis-horizontal" size={20} color={'#c4b5fd'} />
  ) : null;
}
