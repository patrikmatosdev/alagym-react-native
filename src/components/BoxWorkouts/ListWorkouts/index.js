import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {List} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ListWorkouts = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <List.Item
        title={props.title}
        description={props.description}
        left={props => (
          <List.Icon
            {...props}
            icon="dumbbell"
            color="#aaaa"
            size={props.size}
          />
        )}
        right={props => (
          <List.Icon {...props} icon="chevron-right" color="#aaaa" size={35} />
        )}
      />
    </TouchableOpacity>
  );
};

export default ListWorkouts;
