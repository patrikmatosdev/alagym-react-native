import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const DetailsBox = ({name, surname, status}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          {name} {surname}
        </Text>
      </View>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>{status}</Text>
      </View>
    </View>
  );
};

export default DetailsBox;
