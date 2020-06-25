import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import ExerciseSlide from './ExerciseSlide';

const Exercises = () => {
  return (
    <Swiper style={styles.container} showsButtons={true} activeDotColor="white">
      <ExerciseSlide />
      <ExerciseSlide />
      <ExerciseSlide />
    </Swiper>
  );
};

export default Exercises;
