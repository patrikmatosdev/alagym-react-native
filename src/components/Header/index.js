import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const openSearch = routeName => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo} />
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => openSearch('Search')}>
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
