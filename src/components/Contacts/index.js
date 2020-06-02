import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BoxContact from './BoxContact/index';
import Avat from '../../assets/img/patrik.jpg';

export const Contacts = () => {
  return (
    <View style={styles.container}>
      <BoxContact
        avatar={Avat}
        name="Patrik"
        surname="Matos"
        status="Uma frase como status."
      />
    </View>
  );
};

export default Contacts;
