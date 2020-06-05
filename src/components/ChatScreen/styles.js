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
    padding: 10,
  },

  containerInput: {
    flex: 1,
  },

  containerButton: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 40,
  },
});

export default styles;
