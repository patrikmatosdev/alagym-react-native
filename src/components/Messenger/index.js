import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import BoxMessenger from './BoxMessenger';
import Avat from '../../assets/img/patrik.jpg';
import {useNavigation} from '@react-navigation/native';

const Messenger = () => {
  const navigation = useNavigation();

  const openScreen = routeName => {
    navigation.navigate(routeName);
  };

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
          onPress={() => openScreen('ChatScreen')}
        />
      </ScrollView>
    </View>
  );
};

export default Messenger;
