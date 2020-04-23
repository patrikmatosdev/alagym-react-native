import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';
import styles from './styles';

const PostImage = () => {
  return (
    <View style={styles.cointainer}>
      <View style={styles.boxImage}>
        <Avatar.Image
          size={60}
          source={require('../../../assets/img/patrik.jpg')}
        />
      </View>
      <View style={styles.boxTitle}>
        <Text style={styles.title}>Patrik Matos</Text>
        <Text style={styles.time}>20 min</Text>
      </View>
    </View>
  );
};

export default PostImage;
