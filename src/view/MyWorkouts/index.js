import React, {useState} from 'react';
import {View, Text} from 'react-native';
import BoxWorkouts from '../../components/BoxWorkouts';
import styles from './styles';
import Title from '../../components/BoxWorkouts/Title/index';
import ListWorkouts from '../../components/BoxWorkouts/ListWorkouts';
import {useNavigation} from '@react-navigation/native';

const MyWorkouts = () => {
  const navigation = useNavigation();

  const openScreen = routeName => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <Title />
      <BoxWorkouts />
      <ListWorkouts openExercises={() => openScreen('Exercises')} />
    </View>
  );
};

export default MyWorkouts;
