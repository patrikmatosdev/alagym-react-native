import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import PostImage from './PostImage/index';
import PostText from './PostText/Index';

const BoxPost = () => {
  return (
    <View style={styles.cointainer}>
      <PostImage />
      <PostText />
    </View>
  );
};

export default BoxPost;
