import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Logo from './Logo/index';
import Title from './Title/index';
import background from '../../assets/img/trainingA.jpeg';
import Details from './Details';

const BoxAcademy = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Logo background={background} />
      <Title title="Academia Smart Fit" unity="Aclimação" />
      <Details startTime={5} endTime={22} distance={'30m'} />
    </TouchableOpacity>
  );
};

export default BoxAcademy;
