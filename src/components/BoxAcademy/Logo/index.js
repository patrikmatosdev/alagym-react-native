import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const Logo = props => {
  return (
    <View style={styles.container}>
      <ImageBackground source={props.background} style={styles.image} />
    </View>
  );
};

export default Logo;
