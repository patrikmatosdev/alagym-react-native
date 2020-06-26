import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.colIcon}>
        <IconButton icon="emoticon-outline" size={24} color="#aaaaaa" />
      </TouchableOpacity>
      <View style={styles.containerInput}>
        <TextInput placeholder="Digite uma mensagem" style={styles.input} />
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.containerButton}>
          <IconButton icon="attachment" size={24} color="#bbbbbb" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButton}>
          <IconButton icon="camera" size={24} color="#bbbbbb" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputChat;
