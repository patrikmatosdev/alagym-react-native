import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';

const DescriptionBox = ({name, surname, menssage}) => {
  return (
    <View style={style.container}>
      <View style={style.containerTitle}>
        <Text style={style.title}>
          {name} {surname}
        </Text>
      </View>
      <View style={style.containerText}>
        <Text style={style.Text}>{menssage}</Text>
      </View>
    </View>
  );
};

export default DescriptionBox;
