import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Title = () => {
  return (
    <View style={styles.containerTitle}>
      <Text style={styles.title}>Meus Treinos</Text>
    </View>
  );
};

export default Title;
