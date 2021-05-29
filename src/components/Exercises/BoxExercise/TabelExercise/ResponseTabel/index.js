import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ResponseTabel = ({time, serie, repetition}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.col1}>
          <Text style={styles.label}>Séries</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.label}>Repetições</Text>
        </View>
      </View>
      <View style={styles.tabel}>
        <View style={styles.col1}>
          <Text style={styles.label}>{serie}°</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.label}>{repetition}</Text>
        </View>
      </View>
    </View>
  );
};

export default ResponseTabel;
