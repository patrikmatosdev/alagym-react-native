import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import CoreStack from './src/routes/CoreStack';
import CoreTabNavigator from './src/routes/CoreTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <CoreStack />
    </NavigationContainer>
  );
};

export default App;
