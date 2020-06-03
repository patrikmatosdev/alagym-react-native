import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderButtons from '../components/Header/index';
import Search from '../view/Search/index';
import MessengerTab from './MessengerTab';

const Stack = createStackNavigator();

const MenssagerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen />
    </Stack.Navigator>
  );
};

export default MenssagerStack;
