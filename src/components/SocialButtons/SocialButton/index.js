import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';

const SocialButton = ({icon, label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerIcon}>
        <IconButton
          icon={icon}
          size={22}
          style={styles.button}
          color="#cccccc"
        />
      </View>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;
