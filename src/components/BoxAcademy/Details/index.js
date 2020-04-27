import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Details = props => {
  return (
    <View style={styles.container}>
      <View style={styles.boxDetails}>
        <Text style={styles.title}>Horário</Text>
        <Text style={styles.label}>
          {props.startTime} às {props.endTime}
        </Text>
      </View>
      <View style={styles.boxDetails}>
        <Text style={styles.title}>Distância</Text>
        <Text style={styles.label}>{props.distance} à pé</Text>
      </View>
      <View style={styles.boxDetails} />
    </View>
  );
};

export default Details;
