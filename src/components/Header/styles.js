import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexBasis: 50,
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: 'row',
    backgroundColor: '#ffff',
  },

  containerLogo: {
    flex: 1,
    paddingHorizontal: 20,
  },

  containerButtons: {
    flexBasis: 135,
    flexShrink: 0,
    flexGrow: 0,
    flexDirection: 'row',
  },

  textLogo: {
    fontSize: 36,
    color: '#EEAB00',
    fontWeight: 'bold',
    fontFamily: 'Righteous-Regular',
  },

  button: {
    backgroundColor: '#eee',
    marginLeft: 5,
    borderRadius: 50,
  },
});

export default styles;
