import React from 'react';
import {View, Text, Image} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  containerImage: {
    position: 'relative',
  },
  text: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#a3a3a3',
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 99,
    textAlign: 'center',
  },
  image: {
    marginTop: 20,
    width: 250,
    height: 200,
    alignSelf: 'center',
  },
});

export default function Loading(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Text style={styles.text}>{props.text}</Text>
        <Image
          style={styles.image}
          source={require('../../assets/gif/loading.gif')}
        />
        <ProgressBar color="#a3a3a3" indeterminate={true} />
      </View>
    </View>
  );
}
