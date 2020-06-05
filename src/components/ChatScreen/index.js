import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import InputChat from './InputChat';
import {IconButton} from 'react-native-paper';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerChat}>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>

        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>

        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>

        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>
        <Text>Oi</Text>

        <Text>Oi</Text>
        <Text>Oi</Text>
      </ScrollView>
      <View style={styles.containerInputs}>
        <View style={styles.containerInput}>
          <InputChat />
        </View>
        <TouchableOpacity style={styles.containerButton}>
          <IconButton
            size={50}
            icon="send-circle"
            color="blue"
            style={styles.button}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
