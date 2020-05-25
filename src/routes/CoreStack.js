import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoreTabNavigator from './CoreTabNavigator';
import HeaderButtons from '../components/Header/index';
import Search from '../view/Search/index';
import MessengerTab from './MessengerTab';

const Stack = createStackNavigator();

const CoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'AlaGym',
          headerStyle: {
            backgroundColor: '#ffff',
          },
          headerRight: () => <HeaderButtons />,
        }}
        name="Home"
        component={CoreTabNavigator}
      />
      <Stack.Screen
        options={{
          title: 'Procurar',
          headerStyle: {
            backgroundColor: '#ffff',
          },
        }}
        name="Search"
        component={Search}
      />
      <Stack.Screen name="Messeger" component={MessengerTab} />
    </Stack.Navigator>
  );
};

export default CoreStack;
