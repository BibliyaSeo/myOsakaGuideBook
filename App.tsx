import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigators/RootNavigation';
import {store} from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
