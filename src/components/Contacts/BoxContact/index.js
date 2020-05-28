import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {AvatarBox} from './AvatarBox/index';
import DetailsBox from './DetailsBox';
import IconBox from './IconBox';

const BoxContact = () => {
  return (
    <View style={styles.container}>
      <AvatarBox />
      <DetailsBox />
      <IconBox />
    </View>
  );
};

export default BoxContact;
