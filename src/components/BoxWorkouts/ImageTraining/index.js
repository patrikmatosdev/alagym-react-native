import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native';

const ImageTraining = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerImage}>
        <ImageBackground source={props.image} style={styles.image} />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageTraining;
