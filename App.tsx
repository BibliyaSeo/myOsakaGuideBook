import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigators/RootNavigation';
import {store} from './src/redux/store';

interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}

export default function App() {
  (Text as unknown as TextWithDefaultProps).defaultProps =
    (Text as unknown as TextWithDefaultProps).defaultProps || {};
  (Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
    false;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
