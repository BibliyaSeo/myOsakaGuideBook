import React from 'react';
import Lottie from 'lottie-react-native';

export default function Animation() {
  return (
    <Lottie source={require('../assets/lottie/japan.json')} autoPlay loop />
  );
}
