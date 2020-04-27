import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyWorkouts from '../view/MyWorkouts/index';
import Home from '../view/Home/index';
import Store from '../view/Store/index';
import MySettings from '../view/MySettings/index';
import CoreStack from './CoreStack';

const Tab = createMaterialTopTabNavigator();

const CoreTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      style={{backgroundColor: '#ffff'}}
      screenOptions={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={24} />
        ),
      }}
      tabBarOptions={{
        activeTintColor: '#EEAB00',
        inactiveTintColor: '#BBBBBB',
        indicatorStyle: {backgroundColor: '#EEAB00'},
        labelStyle: {fontFamily: 'Righteous, Cursive'},
        style: {backgroundColor: '#fffff'},
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="MyWorkouts"
        component={MyWorkouts}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="shopping" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Configuration"
        component={MySettings}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="view-sequential"
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CoreTabNavigator;
