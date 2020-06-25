import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';

const ButtonBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ta feito!</Text>
    </View>
  );
};

export default ButtonBox;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'green',
    zIndex: 20,
  },

  label: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
