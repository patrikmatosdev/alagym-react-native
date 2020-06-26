import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  containerLabel: {
    flex: 1,
    justifyContent: 'center',
  },

  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    color: '#191970',
    fontSize: 16,
  },

  labelIcon: {
    color: '#aaa',
    fontWeight: 'bold',
  },

  icon: {
    margin: 0,
    padding: 0,
  },
});

export default styles;
