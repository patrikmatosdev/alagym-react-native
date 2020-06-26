import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerTitle: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
  },

  containerDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerLabel: {
    flex: 1,
  },

  label: {
    fontSize: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
