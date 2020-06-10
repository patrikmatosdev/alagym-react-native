import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recado e número de telefone</Text>
    </View>
  );
};

export default Title;
