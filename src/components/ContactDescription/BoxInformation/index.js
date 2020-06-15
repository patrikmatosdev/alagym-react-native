import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Status from './Status';
import TitleBox from '../TitleBox';
import IconNumber from './IconNumber';

const BoxInformation = ({openMenssages}) => {
  return (
    <View style={styles.container}>
      <TitleBox />
      <Status />
      <IconNumber openMenssages={openMenssages} />
    </View>
  );
};

export default BoxInformation;
