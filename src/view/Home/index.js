import React from 'react';
import {ScrollView} from 'react-native';
import BoxPost from '../../components/BoxPost';

const Home = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <BoxPost />
      <BoxPost />
    </ScrollView>
  );
};

export default Home;
