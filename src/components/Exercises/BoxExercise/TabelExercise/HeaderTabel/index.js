import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const HeaderTabel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSerie}>
        <Text style={styles.label}>Série</Text>
      </View>
      <View style={styles.containerRepetition}>
        <Text style={styles.label}>Repetições</Text>
      </View>
      <View style={styles.containerTime}>
        <Text style={styles.label}>Tempo</Text>
      </View>
    </View>
  );
};

export default HeaderTabel;
