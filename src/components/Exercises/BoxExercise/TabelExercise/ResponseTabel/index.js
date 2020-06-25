import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ResponseTabel = ({time, serie, repetition}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSerie}>
        <Text style={styles.label}>{serie}</Text>
      </View>
      <View style={styles.containerRepetition}>
        <Text style={styles.label}>{repetition}</Text>
      </View>
      <View style={styles.containerTime}>
        <Text style={styles.label}>{time}</Text>
      </View>
    </View>
  );
};

export default ResponseTabel;
