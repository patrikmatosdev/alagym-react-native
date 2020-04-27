import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Title = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.title} ({props.unity})
      </Text>
    </View>
  );
};

export default Title;
