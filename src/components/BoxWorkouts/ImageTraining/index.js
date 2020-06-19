import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';

const ImageTraining = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={props.image} style={styles.image} />
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageTraining;
