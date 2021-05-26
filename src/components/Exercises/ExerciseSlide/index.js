import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BoxExercise from '../BoxExercise';

const ExerciseSlide = props => {
  return (
    <View style={styles.container} >
      {console.warn(props)}
      {!!props.data.map(exercise => {
        return <BoxExercise title={exercise.title} />;
      })}
    </View>
  );
};

export default ExerciseSlide;
