import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';
import BoxInformation from './BoxInformation';
import BoxOptions from './BoxOptions';
import {useNavigation} from '@react-navigation/native';

const ContactDescription = () => {
  const navigation = useNavigation();

  const openMenssages = () => {
    navigation.navigate('ChatScreen');
  };

  return (
    <View style={style.container}>
      <BoxInformation openMenssages={() => openMenssages()} />
      <View style={style.row}>
        <BoxOptions icon="cancel" iconColor="red" label="Bloquear" />
      </View>
      <View style={style.row}>
        <BoxOptions
          icon="delete"
          iconColor="red"
          label="Apagar conversa"
          openMenssages={() => openMenssages()}
          // @TODO labelColor={`{color: "red"}`}
        />
      </View>
    </View>
  );
};

export default ContactDescription;
