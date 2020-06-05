import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },

  colIcon: {
    flexBasis: 50,
    flexShrink: 0,
    flexGrow: 0,
    backgroundColor: '#ffffff',
    borderRightWidth: 0.5,
    borderRightColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerInput: {
    flex: 1,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },

  containerButtons: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 100,
    flexDirection: 'row',
  },

  containerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
