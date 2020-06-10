import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const IconNumber = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContact}>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>+55 11 99999-9999</Text>
        </View>
        <View style={styles.containerType}>
          <Text style={styles.labelType}>Celular</Text>
        </View>
      </View>
    </View>
  );
};

export default IconNumber;
