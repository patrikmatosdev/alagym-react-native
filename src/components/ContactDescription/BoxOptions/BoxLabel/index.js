import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const BoxLabel = ({label, labelColor}) => {
  return (
    <View style={styles.container}>
      <Text color={labelColor} style={styles.label}>
        {label}
      </Text>
    </View>
  );
};

export default BoxLabel;
