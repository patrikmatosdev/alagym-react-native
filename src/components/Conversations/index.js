import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BoxConvarsation from './BoxConversation';

const Conversations = () => {
  return (
    <View style={styles.cointainer}>
      <BoxConvarsation />
      <BoxConvarsation />
      <BoxConvarsation />
      <BoxConvarsation />
      <BoxConvarsation />
    </View>
  );
};

export default Conversations;
