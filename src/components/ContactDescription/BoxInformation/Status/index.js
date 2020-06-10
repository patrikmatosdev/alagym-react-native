import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Status = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>Uma frase como status.</Text>
      </View>
      <View style={styles.containerHour}>
        <Text style={styles.labelHour}>ontem as 17:00</Text>
      </View>
    </View>
  );
};

export default Status;
