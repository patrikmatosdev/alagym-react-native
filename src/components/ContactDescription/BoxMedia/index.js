import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Title from './Title';
import Media from './Media';

const BoxMedia = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Title />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.containerMedia}>
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
        <Media />
      </ScrollView>
    </View>
  );
};

export default BoxMedia;
