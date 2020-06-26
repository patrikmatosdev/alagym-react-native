import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import IconBox from './IconBox';
import BoxLabel from './BoxLabel';

const BoxOptions = ({icon, iconColor, label, labelColor}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconBox icon={icon} iconColor={iconColor} />
      <BoxLabel label={label} labelColor={labelColor} />
    </TouchableOpacity>
  );
};

export default BoxOptions;
