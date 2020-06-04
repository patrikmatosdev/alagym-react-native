import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerChat: {
    flex: 1,
    padding: 20,
  },

  containerInputs: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 60,
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 10,
  },

  containerInput: {
    flex: 1,
    backgroundColor: 'red',
  },

  containerButton: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 80,
  },
});

export default styles;
