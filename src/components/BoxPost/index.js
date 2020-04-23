import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import PostImage from './PostImage/index';
import PostText from './PostText/Index';
import PostMedia from './PostMedia';
import SocialButtons from '../SocialButtons';

const BoxPost = () => {
  return (
    <View style={styles.cointainer}>
      <PostImage />
      <PostText />
      <PostMedia />
      <SocialButtons />
    </View>
  );
};

export default BoxPost;
