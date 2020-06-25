import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import HeaderTabel from './HeaderTabel';
import ResponseTabel from './ResponseTabel';

const DetailsExercise = () => {
  return (
    <View style={styles.container}>
      <HeaderTabel />
      <ResponseTabel serie="1° serie" repetition={3} time={3} />
      <ResponseTabel serie="2° serie" repetition={12} time={5} />
      <ResponseTabel serie="3° serie" repetition={5} time={3} />
      <ResponseTabel serie="4° serie" repetition={3} time={20} />
    </View>
  );
};

export default DetailsExercise;
