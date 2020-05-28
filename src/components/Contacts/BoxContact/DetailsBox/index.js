import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const DetailsBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Patrik Matos</Text>
      </View>
      <View style={styles.containerDetails}>
        <View style={styles.containterIcon}>
          {/** @TODO ICON NAME */}
          <Icon name="check" size={20} color="green" />
        </View>
        <View style={styles.containerLabel}>
          <Text>Ontem ás 18:00h</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsBox;
