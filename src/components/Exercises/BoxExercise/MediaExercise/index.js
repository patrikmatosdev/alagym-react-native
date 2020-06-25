import React from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './styles';
import Media from '../../../../assets/img/trainingC.jpeg';
import ButtonBox from './ButtonBox';

const MediaExercise = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <ImageBackground source={Media} style={styles.image} />
      </View>
      <View style={styles.containerButton}>
        <ButtonBox />
      </View>
    </View>
  );
};

export default MediaExercise;
