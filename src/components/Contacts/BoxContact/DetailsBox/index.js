import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const DetailsBox = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Patrik Matos</Text>
      </View>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>Uma frase como status!</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DetailsBox;
