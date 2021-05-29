import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './styles';
import BoxInformation from './BoxInformation';
import BoxOptions from './BoxOptions';
import {useNavigation} from '@react-navigation/native';
import BoxMedia from './BoxMedia';

const ContactDescription = () => {
  const navigation = useNavigation();

  // const openMenssages = () => {
  //   navigation.navigate('ChatScreen');
  // };

  return (
    <ScrollView style={style.container}>
      <View style={style.row}>
        <BoxMedia />
      </View>
      <View style={style.row}>
        <BoxInformation openMenssages={() => openMenssages()} />
      </View>
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
    </ScrollView>
  );
};

export default ContactDescription;
