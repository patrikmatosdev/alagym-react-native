import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#ccc',
    borderTopWidth: 0.5,
    paddingTop: 10,
    flexDirection: 'row',
  },

  containerContact: {
    flex: 1,
    justifyContent: 'center',
  },

  containerIcons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  colIcon: {
    flex: 1,
  },

  number: {
    fontSize: 18,
  },

  labelType: {
    color: '#ccc',
  },
});

export default styles;
