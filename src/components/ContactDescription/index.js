import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';
import BoxInformation from './BoxInformation';
import BoxOptions from './BoxOptions';

const ContactDescription = () => {
  return (
    <View style={style.container}>
      <BoxInformation />
      <View style={style.row}>
        <BoxOptions icon="cancel" iconColor="red" label="Bloquear" />
      </View>
      <View style={style.row}>
        <BoxOptions
          icon="delete"
          iconColor="red"
          label="Apagar conversa"
          // @TODO labelColor={`{color: "red"}`}
        />
      </View>
    </View>
  );
};

export default ContactDescription;
