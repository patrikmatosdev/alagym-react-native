import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BoxChat from './BoxChat';

const Chat = () => {
  return (
    <View style={styles.cointainer}>
      <BoxChat />
      <BoxChat />
      <BoxChat />
      <BoxChat />
      <BoxChat />
    </View>
  );
};

export default Chat;
