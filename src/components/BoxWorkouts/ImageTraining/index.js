import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';

const ImageTraining = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ImageBackground source={props.background} style={styles.image} />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ImageTraining;
