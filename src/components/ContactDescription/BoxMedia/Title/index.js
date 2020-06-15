import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';

const Title = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>Mídia, Links e docs</Text>
      </View>
      <TouchableOpacity style={styles.containerIcon}>
        <Text style={styles.labelIcon}>137</Text>
        <IconButton
          icon="chevron-right"
          style={styles.icon}
          size={22}
          color="#aaa"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Title;
