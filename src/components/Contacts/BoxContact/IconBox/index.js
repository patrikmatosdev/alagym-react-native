import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';

const IconBox = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconButton icon="phone" color="green" />
    </TouchableOpacity>
  );
};

export default IconBox;
