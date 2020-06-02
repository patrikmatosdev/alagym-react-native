import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import BoxChat from './BoxChat';
import Avat from '../../assets/img/patrik.jpg';

const Chat = () => {
  return (
    <View style={styles.cointainer}>
      <ScrollView>
        <BoxChat
          name="Patrik"
          surname="Matos"
          menssage="Minha primeira Mensagem!"
          avatar={Avat}
          hour="13:00"
          notification="5"
        />
      </ScrollView>
    </View>
  );
};

export default Chat;
