import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  containerBack: {
    flexGrow: 0,
    flexBasis: 60,
    flexShrink: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  containerProfile: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 60,
    paddingLeft: 10,
    justifyContent: 'center',
  },

  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },

  containerButton: {
    paddingRight: 5,
  },

  iconButton: {
    margin: 0,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  check: {
    color: '#ffffff',
  },
});

export default styles;
