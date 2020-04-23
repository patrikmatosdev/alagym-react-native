import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';

const SocialButtons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSocial}>
        <View style={styles.socialButtons}>
          <Button
            icon="heart"
            color="#ddd"
            labelStyle={{
              fontSize: 10,
              fontWeight: 'bold',
              color: '#aaa',
              fontFamily: 'inherit',
            }}>
            Curtir
          </Button>
        </View>

        <View style={styles.socialButtons}>
          <Button
            icon="comment"
            color="#ddd"
            labelStyle={{
              fontSize: 10,
              fontWeight: 'bold',
              color: '#aaa',
              fontFamily: 'inherit',
            }}>
            Comentar
          </Button>
        </View>

        <View style={styles.socialButtons}>
          <Button
            icon="subdirectory-arrow-left"
            color="#ddd"
            labelStyle={{
              fontSize: 10,
              fontWeight: 'bold',
              color: '#aaa',
              fontFamily: 'inherit',
            }}>
            Compartilhar
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SocialButtons;
