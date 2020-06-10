import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';
import BoxInformation from './BoxInformation';

const ContactDescription = () => {
  return (
    <View style={style.container}>
      <BoxInformation />
    </View>
  );
};

export default ContactDescription;
