import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Text style={styles.textLogo}>AlaGym</Text>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button}>
          <IconButton icon="magnify" size={28} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <IconButton icon="forum" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
