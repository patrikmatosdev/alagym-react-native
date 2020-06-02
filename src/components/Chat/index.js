import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BoxChat from './BoxChat';
import Avat from '../../assets/img/patrik.jpg';

const Chat = () => {
  return (
    <View style={styles.cointainer}>
      <BoxChat
        name="Patrik"
        surname="Matos"
        menssage="Minha primeira Mensagem!"
        avatar={Avat}
        hour="13:00"
        notification="5"
      />
    </View>
  );
};

export default Chat;
