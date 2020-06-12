import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';

const IconBox = ({icon, iconColor}) => {
  return (
    <View style={styles.container}>
      <IconButton icon={icon} size={32} color={iconColor} />
    </View>
  );
};

export default IconBox;
