import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {List} from 'react-native-paper';

const ListWorkouts = props => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default ListWorkouts;
