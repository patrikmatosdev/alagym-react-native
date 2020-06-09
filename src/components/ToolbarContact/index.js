import React from 'react';
import {IconButton, Avatar} from 'react-native-paper';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Patrik from '../../assets/img/patrik.jpg';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const ToolbarContact = () => {
  const navigation = useNavigation();

  const openBack = () => {
    navigation.goBack();
  };

  const openScreen = routeName => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openBack()} style={styles.containerBack}>
        <View>
          <IconButton
            style={{margin: 0}}
            icon="arrow-left"
            size={24}
            color="#ffffff"
          />
        </View>
        <View>
          <Avatar.Image size={42} source={Patrik} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openScreen('ContactDescription')}
        style={styles.containerProfile}>
        <Text style={styles.title}>Patrik</Text>
        <Text style={styles.check}>visto por ultimo hoje às 17:00</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={true} style={styles.containerButtons}>
        <TouchableOpacity style={styles.containerButton}>
          <IconButton
            icon="video"
            style={styles.iconButton}
            color="#ffffff"
            size={26}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButton}>
          <IconButton
            icon="phone"
            style={styles.iconButton}
            color={'#ffffff'}
            size={26}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerButton}>
          <IconButton
            style={styles.iconButton}
            icon="dots-vertical"
            color="#ffffff"
            size={26}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default ToolbarContact;
