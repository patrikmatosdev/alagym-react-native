import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MediaExercise from './MediaExercise';
import TitleExercise from './TitleExercise';
import DetailsExercise from './DetailsExercise';

const BoxExercise = () => {
  return (
    <View style={styles.container}>
      <MediaExercise />
      <TitleExercise />
      <DetailsExercise />
    </View>
  );
};

export default BoxExercise;
