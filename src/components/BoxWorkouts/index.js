import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ButtonImage from './ButtonImage';

import imageA from '../../assets/img/trainingA.jpeg';
import imageB from '../../assets/img/trainingB.jpeg';
import imageC from '../../assets/img/trainingC.jpeg';

const BoxWorkouts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.columnWorkout}>
        <ButtonImage title="Casa" image={imageA} />
      </View>
      <View style={styles.columnWorkout}>
        <ButtonImage title="Academias" image={imageB} />
      </View>
      <View style={styles.columnWorkout}>
        <ButtonImage title="Treino C" image={imageC} />
      </View>
    </View>
  );
};

export default BoxWorkouts;
