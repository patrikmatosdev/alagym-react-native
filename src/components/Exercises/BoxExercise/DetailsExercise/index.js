import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';

const DetailsExercise = () => {
  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <View style={styles.containerLabel}>
          <Text>Séries</Text>
        </View>
        <View style={styles.containerIcon}>
          <IconButton icon="list" size={40} color="blue" />
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.containerLabel}>
          <Text>Repetições</Text>
        </View>
        <View style={styles.containerIcon}>
          <IconButton icon="list" size={40} color="blue" />
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.containerLabel}>
          <Text>Tempo</Text>
        </View>
        <View style={styles.containerIcon}>
          <IconButton icon="list" size={40} color="blue" />
        </View>
      </View>
    </View>
  );
};

export default DetailsExercise;
