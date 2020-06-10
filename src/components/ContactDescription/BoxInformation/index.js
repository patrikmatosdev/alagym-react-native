import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Status from './Status';
import Title from './Title';
import IconNumber from './IconNumber';

const BoxInformation = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Status />
      <IconNumber />
    </View>
  );
};

export default BoxInformation;
