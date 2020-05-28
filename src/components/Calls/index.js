import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import BoxCall from './BoxCall';

export const Calls = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <BoxCall />
      </ScrollView>
    </View>
  );
};

export default Calls;
