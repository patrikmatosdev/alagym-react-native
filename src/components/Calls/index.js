import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import BoxCall from './BoxCall';
import Avat from '../../assets/img/patrik.jpg';

export const Calls = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <BoxCall
          name="Patrik"
          surname="Matos"
          hour="13:00"
          label="ontem ás "
          avatar={Avat}
          iconStatus="check"
        />
      </ScrollView>
    </View>
  );
};

export default Calls;
