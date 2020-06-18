import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import SocialButton from './SocialButton';

const SocialButtons = () => {
  return (
    <View style={styles.container}>
      <SocialButton icon="cards-heart" label="Curtir" />
      <SocialButton icon="chat" label="Comentar" />
      <SocialButton icon="share" label="Compartilhar" />
    </View>
  );
};

export default SocialButtons;
