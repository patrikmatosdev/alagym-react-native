import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BoxExercise from '../BoxExercise';

const ExerciseSlide = () => {
  return (
    <View style={styles.container}>
      <BoxExercise />
    </View>
  );
};

export default ExerciseSlide;
