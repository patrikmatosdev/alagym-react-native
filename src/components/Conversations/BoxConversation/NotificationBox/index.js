import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';
import {Badge} from 'react-native-paper';

export const NotificationBox = () => {
  return (
    <View style={style.container}>
      <View style={style.containerHour}>
        <Text style={style.hour}>13:00</Text>
      </View>
      <View style={style.containerBadge}>
        <Badge size={26}>3</Badge>
      </View>
    </View>
  );
};

export default NotificationBox;
