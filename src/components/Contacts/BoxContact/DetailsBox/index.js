import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const DetailsBox = ({name, surname, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          {name} {surname}
        </Text>
      </View>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DetailsBox;
