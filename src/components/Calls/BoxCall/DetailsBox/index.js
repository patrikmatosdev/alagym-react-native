import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const DetailsBox = ({name, surname, iconStatus, hour, label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          {name} {surname}
        </Text>
      </View>
      <View style={styles.containerDetails}>
        <View style={styles.containterIcon}>
          {/** @TODO ICON NAME */}
          <Icon name={iconStatus} size={20} color="green" />
        </View>
        <View style={styles.containerLabel}>
          <Text>
            {label}
            {hour}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsBox;
