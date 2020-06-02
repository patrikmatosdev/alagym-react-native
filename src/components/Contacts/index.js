import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BoxContact from './BoxContact/index';

export const Contacts = () => {
  return (
    <View style={styles.container}>
      <BoxContact />
    </View>
  );
};

export default Contacts;
