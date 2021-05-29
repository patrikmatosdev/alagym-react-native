import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import HeaderTabel from './HeaderTabel';
import ResponseTabel from './ResponseTabel';

const DetailsExercise = props => {
  return (
    <View style={styles.container}>
      {!!props.workouts && props.workouts.map((workout, index) => {
      return <ResponseTabel serie={index+1} repetition={workout.repetitions} time={3} />;
      })}
    </View>
  );
};

export default DetailsExercise;
