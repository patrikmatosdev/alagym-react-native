import React from 'react';
import {View, Text, Image} from 'react-native';
import Patrik from '../../../../assets/img/patrik.jpg';
import style from './styles';

const AvatarBox = ({avatar}) => {
  return (
    <View style={style.container}>
      <View style={style.containerAvatar}>
        <Image source={avatar} style={style.image} />
      </View>
    </View>
  );
};

export default AvatarBox;
