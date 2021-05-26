import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const TitleExercise = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{!!props.title ? props.title : 'Sem Titulo'}</Text>
    </View>
  );
};

export default TitleExercise;
