import {Dimensions} from 'react-native';
import {Platform} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const WINDOW_HEIGHT = Dimensions.get('window').height;

let bottomBar;

if (Platform.OS === 'android') {
  bottomBar = SCREEN_HEIGHT - WINDOW_HEIGHT;
}

if (Platform.OS === 'ios') {
  bottomBar = 0;
}

export const useBottomBarHeight = bottomBar;
