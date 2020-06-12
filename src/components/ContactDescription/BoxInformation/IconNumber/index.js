import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {IconButton} from 'react-native-paper';

const IconNumber = ({openMenssages}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContact}>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>+55 11 99999-9999</Text>
        </View>
        <View style={styles.containerType}>
          <Text style={styles.labelType}>Celular</Text>
        </View>
      </View>
      <View style={styles.containerIcons}>
        <TouchableOpacity onPress={openMenssages} style={styles.colIcon}>
          <IconButton icon="comment-text" size={26} color="#191970" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.colIcon}>
          <IconButton icon="phone-in-talk" size={26} color="#191970" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.colIcon}>
          <IconButton icon="video" size={26} color="#191970" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IconNumber;
