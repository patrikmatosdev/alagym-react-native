import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: '#cccccc',
    paddingTop: 10,
  },

  containerIcon: {
    flexBasis: 30,
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerLabel: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 16,
    color: '#bbbbbb',
    fontWeight: 'bold',
    lineHeight: 24,
  },

  button: {
    margin: 0,
  },
});

export default styles;
