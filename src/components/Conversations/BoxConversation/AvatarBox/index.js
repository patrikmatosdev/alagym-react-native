import React from 'react';
import {View, Text, Image} from 'react-native';
import Patrik from '../../../../assets/img/patrik.jpg';
import style from './styles';

const AvatarBox = () => {
  return (
    <View style={style.container}>
      <View style={style.containerImage}>
        <Image source={Patrik} style={style.image} />
      </View>
    </View>
  );
};

export default AvatarBox;
