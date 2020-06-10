import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './styles';
import Patrik from '../../assets/img/patrik.jpg';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const ToolbarImage = () => {
  const navigation = useNavigation();

  const openBack = () => {
    navigation.goBack();
  };
  /* @TODO - ORGANIZATION CODE **/
  return (
    <View style={styles.container}>
      <View style={styles.containerIcons}>
        <TouchableOpacity
          onPress={() => openBack()}
          style={styles.containerIconArrow}>
          <IconButton icon="arrow-left" size={26} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerOptions}>
          <IconButton
            style={styles.iconButton}
            icon="dots-vertical"
            color="#ffffff"
            size={26}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerImage}>
        <ImageBackground source={Patrik} style={styles.image} />
      </View>
    </View>
  );
};

export default ToolbarImage;
