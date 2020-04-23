import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import BoxPost from '../../components/BoxPost';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <BoxPost />
      <BoxPost />
    </View>
  );
};

export default Home;
