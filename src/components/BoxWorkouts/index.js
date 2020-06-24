import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ImageTraining from './ImageTraining';

import imageA from '../../assets/img/trainingA.jpeg';
import imageB from '../../assets/img/trainingB.jpeg';
import imageC from '../../assets/img/trainingC.jpeg';

const BoxWorkouts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.columnWorkout}>
        <ImageTraining title="Casa" image={imageA} />
      </View>
      <View style={styles.columnWorkout}>
        <ImageTraining title="Academias" image={imageB} />
      </View>
      <View style={styles.columnWorkout}>
        <ImageTraining title="Treino C" image={imageC} />
      </View>
    </View>
  );
};

export default BoxWorkouts;
