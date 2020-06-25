import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function BoxOverlay() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#191970',
    opacity: 0.3,
  },
});
