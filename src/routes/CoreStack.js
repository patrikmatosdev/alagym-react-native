import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoreTabNavigator from './CoreTabNavigator';
import HeaderButtons from '../components/Header/index';
import Search from '../view/Search/index';
import MessengerTab from './MessengerTab';
import Chat from '../components/ChatScreen/index';
import ChatAvatar from '../components/ChatScreen/ChatAvatar';
import {View, Text} from 'react-native';
import {IconButton, Avatar} from 'react-native-paper';
import Patrik from '../assets/img/patrik.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const CoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'AlaGym',
          headerTitleStyle: {
            color: '#ffffff',
            fontSize: 30,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#191970',
            elevation: 0,
            shadowOpacity: 0,
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
      <Stack.Screen
        name="Messeger"
        component={MessengerTab}
        options={{
          title: 'Messenger',
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            color: '#ffffff',
          },
          headerStyle: {
            backgroundColor: '#191970',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={Chat}
        options={{
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            display: 'none',
          },
          headerStyle: {
            backgroundColor: '#191970',
            elevation: 0,
            shadowOpacity: 0,
          },

          headerLeft: () => (
            <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <IconButton
                  style={{margin: 0}}
                  icon="arrow-left"
                  size={24}
                  color="#ffffff"
                />
                <Avatar.Image size={42} source={Patrik} />
              </View>
              <View
                style={{
                  paddingLeft: 10,
                  width: '100%',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>
                  Patrik
                </Text>
                <Text style={{color: '#ffffff'}}>
                  visto por ultimo hoje às 17:00
                </Text>
              </View>
            </View>
          ),

          headerRight: () => (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                backgroundColor: ' red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity>
                <IconButton icon="camera" color="#ffffff" size={24} />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconButton icon="phone" color={'#ffffff'} size={24} />
              </TouchableOpacity>
              <TouchableOpacity>
                <IconButton icon="menu" color="#ffffff" size={24} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CoreStack;
