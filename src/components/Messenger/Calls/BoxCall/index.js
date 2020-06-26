import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {AvatarBox} from './AvatarBox/index';
import DetailsBox from './DetailsBox';
import IconBox from './IconBox';

const BoxCall = ({avatar, name, surname, hour, iconStatus, label}) => {
  return (
    <View style={styles.container}>
      <AvatarBox avatar={avatar} />
      <DetailsBox
        name={name}
        surname={surname}
        hour={hour}
        iconStatus={iconStatus}
        label={label}
      />
      <IconBox />
    </View>
  );
};

export default BoxCall;
