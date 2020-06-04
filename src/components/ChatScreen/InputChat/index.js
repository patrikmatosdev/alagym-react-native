import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.colIcon}>
        <IconButton icon="emoticon-outline" size={24} color="#ffffff" />
      </TouchableOpacity>
      <View style={styles.containerInput} />
    </View>
  );
};

export default InputChat;
