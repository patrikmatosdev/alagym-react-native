import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MediaExercise from './MediaExercise';
import TitleExercise from './TitleExercise';
import TabelExercise from './TabelExercise';

const BoxExercise = (props) => {
  return (
    <View>
      <MediaExercise img={props.img} />
      <TitleExercise title={props.title} />
      <TabelExercise workouts={props.workouts} />
    </View>
  );
};

export default BoxExercise;
