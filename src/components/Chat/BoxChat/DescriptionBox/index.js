import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';

const DescriptionBox = () => {
  return (
    <View style={style.container}>
      <View style={style.containerTitle}>
        <Text style={style.title}>Patrik Matos</Text>
      </View>
      <View style={style.containerText}>
        <Text style={style.Text}>Minha Primeira mensagem</Text>
      </View>
    </View>
  );
};

export default DescriptionBox;
