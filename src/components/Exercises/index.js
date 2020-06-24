import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import styles from './styles';
import BoxExercises from './ExerciseSlide';
import ExerciseSlide from './ExerciseSlide';
import academy from '../../assets/img/academy.jpeg';
import BoxOverlay from './BoxOverlay';
import Animated from 'react-native-reanimated';

const Exercises = () => {
  let scrollX = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        indicatorStyle="white"
        pagingEnabled={true}
        horizontal={true}>
        <ExerciseSlide />
        <ExerciseSlide />
        <ExerciseSlide />
      </ScrollView>
    </View>
  );
};

export default Exercises;
