import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import BoxContact from './BoxContact/index';
import Avat from '../../assets/img/patrik.jpg';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export const Contacts = () => {
  const navigation = useNavigation();

  const openScreen = routeName => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <BoxContact
          avatar={Avat}
          name="Patrik"
          surname="Matos"
          status="Uma frase como status."
          onPress={() => openScreen('ChatScreen')}
        />
      </ScrollView>
    </View>
  );
};

export default Contacts;
