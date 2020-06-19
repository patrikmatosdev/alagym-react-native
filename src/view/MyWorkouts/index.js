import React from 'react';
import {View, Text} from 'react-native';
import BoxWorkouts from '../../components/BoxWorkouts';
import styles from './styles';
import Title from '../../components/BoxWorkouts/Title/index';
import ListWorkouts from '../../components/BoxWorkouts/ListWorkouts';

const MyWorkouts = () => {
  return (
    <View style={styles.container}>
      <Title />
      <BoxWorkouts />
      <ListWorkouts />
    </View>
  );
};

export default MyWorkouts;
