import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text, View} from 'react-native';
import CoreStack from './src/routes/CoreStack';
import Header from './src/components/Header';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
      <Header />
      <CoreStack />
    </NavigationContainer>
  );
};

export default App;
