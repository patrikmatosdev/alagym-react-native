import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AvatarBox from './AvatarBox';
import DetailsBox from './DetailsBox';

const BoxContact = () => {
  return (
    <View style={styles.container}>
      <AvatarBox />
      <DetailsBox />
    </View>
  );
};

export default BoxContact;
