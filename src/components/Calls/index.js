import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import BoxContact from '../Contacts/BoxContact/index';
import styles from './styles';

export const Calls = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <BoxContact />
        <BoxContact />
        <BoxContact />
        <BoxContact />
        <BoxContact />
        <BoxContact />
        <BoxContact />
        <BoxContact />
        <BoxContact />
        <BoxContact />
      </ScrollView>
    </View>
  );
};

export default Calls;
