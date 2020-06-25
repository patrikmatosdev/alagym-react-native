import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MediaExercise from './MediaExercise';
import TitleExercise from './TitleExercise';
import TabelExercise from './TabelExercise';

const BoxExercise = () => {
  return (
    <View style={styles.container}>
      <MediaExercise />
      <TitleExercise />
      <TabelExercise />
    </View>
  );
};

export default BoxExercise;
