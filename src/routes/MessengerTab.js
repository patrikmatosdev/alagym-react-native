import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Conversations from '../components/Conversations/index';
import {Calls} from '../components/Calls/index';
import {Status} from '../components/Status/index';

const Tab = createMaterialTopTabNavigator();

const MessengerTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Conversations"
      style={{backgroundColor: '#ffff'}}
      screenOptions={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={24} />
        ),
      }}
      // tabBarOptions={{
      //   activeTintColor: '#EEAB00',
      //   inactiveTintColor: '#BBBBBB',
      //   indicatorStyle: {backgroundColor: '#EEAB00'},
      //   labelStyle: {fontFamily: 'Righteous, Cursive'},
      //   style: {backgroundColor: '#fffff'},
      //   showIcon: true,
      //   showLabel: false,
      // }}
    >
      <Tab.Screen
        name="Conversations"
        component={Conversations}
        options={{
          tabBarLabel: 'Conversas',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          tabBarLabel: 'Status',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarLabel: 'Chamadas',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MessengerTab;
