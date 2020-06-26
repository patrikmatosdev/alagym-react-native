import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import AvatarBox from './AvatarBox';
import DetailsBox from './DetailsBox';

const BoxContact = ({avatar, surname, name, status, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AvatarBox avatar={avatar} />
      <DetailsBox name={name} surname={surname} status={status} />
    </TouchableOpacity>
  );
};

export default BoxContact;
