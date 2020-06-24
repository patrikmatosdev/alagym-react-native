import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {List} from 'react-native-paper';

const ButtonIcon = ({title, description, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <List.Item
        title={title}
        description={description}
        left={props => <List.Icon {...props} icon={icon} />}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
    </TouchableOpacity>
  );
};

export default ButtonIcon;
