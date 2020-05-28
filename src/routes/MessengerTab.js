import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Calls from '../components/Calls/index';
import Contacts from '../components/Contacts/';
import Chat from '../components/Chat/index';

const Tab = createMaterialTopTabNavigator();

const MessengerTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      style={{backgroundColor: '#191970'}}
      screenOptions={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={24} />
        ),
      }}
      tabBarOptions={{
        activeTintColor: '#EEAB00',
        inactiveTintColor: '#ffffff',
        indicatorStyle: {backgroundColor: '#EEAB00'},
        labelStyle: {fontFamily: 'Righteous, Cursive'},
        style: {backgroundColor: '#fffff'},
        showIcon: true,
      }}>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Conversas',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cellphone-message"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: 'Chamadas',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="phone-in-talk"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Contacts}
        options={{
          tabBarLabel: 'Contatos',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-supervisor-circle"
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MessengerTab;
