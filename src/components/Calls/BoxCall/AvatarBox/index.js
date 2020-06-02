import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Patrik from '../../../../assets/img/patrik.jpg';

export const AvatarBox = ({avatar}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Image source={avatar} style={styles.image} />
      </View>
    </View>
  );
};

export default AvatarBox;
