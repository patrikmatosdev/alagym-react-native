import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const PostMedia = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/img/patrik.jpg')}
        style={styles.media}
      />
    </View>
  );
};

export default PostMedia;
