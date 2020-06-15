import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import Patrik from '../../../../assets/img/patrik.jpg';

const Media = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerMedia}>
        <ImageBackground source={Patrik} style={styles.media} />
      </TouchableOpacity>
    </View>
  );
};

export default Media;
