import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ImageTraining from './ImageTraining';
import Title from './Title/index';

import imageA from '../../assets/img/trainingA.jpeg';
import imageB from '../../assets/img/trainingB.jpeg';
import imageC from '../../assets/img/trainingC.jpeg';
import ListWorkouts from './ListWorkouts';

const BoxWorkouts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Title />
      </View>

      <View style={styles.containerImage}>
        <ImageTraining title="Todos os Treinos" background={imageA} />
        <ImageTraining title="Personal" background={imageB} />
        <ImageTraining title="Academia" background={imageC} />
      </View>

      <View style={styles.containerList}>
        <ListWorkouts title="Treino A" description="Ombros, Braço, Lombar" />
        <ListWorkouts title="Treino B" description="Pernas, Glúteos, Abdomen" />
        <ListWorkouts title="Treino C" description="Pernas, Glúteos, Abdomen" />
      </View>
    </View>
  );
};

export default BoxWorkouts;
