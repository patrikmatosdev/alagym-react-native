import React from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './styles';
import Media from '../../../../assets/img/trainingC.jpeg';

const MediaExercise = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Media} style={styles.image} />
    </View>
  );
};

export default MediaExercise;
