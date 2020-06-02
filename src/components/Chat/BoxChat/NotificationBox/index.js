import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';
import {Badge} from 'react-native-paper';

export const NotificationBox = ({notification, hour}) => {
  return (
    <View style={style.container}>
      <View style={style.containerHour}>
        <Text style={style.hour}>{hour}</Text>
      </View>
      <View style={style.containerBadge}>
        <Badge size={26}>{notification}</Badge>
      </View>
    </View>
  );
};

export default NotificationBox;
