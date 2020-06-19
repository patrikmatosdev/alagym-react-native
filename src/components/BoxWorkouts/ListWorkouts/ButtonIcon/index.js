import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {List} from 'react-native-paper';

const ButtonIcon = ({title, description, icon}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <List.Item
        title={title}
        description={description}
        left={props => <List.Icon {...props} icon={icon} />}
      />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
