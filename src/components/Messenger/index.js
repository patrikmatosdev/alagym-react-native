import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import BoxMessenger from './BoxMessenger';
import Avat from '../../assets/img/patrik.jpg';

const Messenger = () => {
  return (
    <View style={styles.cointainer}>
      <ScrollView>
        <BoxMessenger
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

export default Messenger;
