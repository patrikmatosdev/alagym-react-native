import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Patrik from '../../../../assets/img/patrik.jpg';

export const AvatarBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Image source={Patrik} style={styles.image} />
      </View>
    </View>
  );
};

export default AvatarBox;
