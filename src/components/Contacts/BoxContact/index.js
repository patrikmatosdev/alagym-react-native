import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AvatarBox from './AvatarBox';
import DetailsBox from './DetailsBox';

const BoxContact = ({avatar, surname, name, status}) => {
  return (
    <View style={styles.container}>
      <AvatarBox avatar={avatar} />
      <DetailsBox name={name} surname={surname} status={status} />
    </View>
  );
};

export default BoxContact;
