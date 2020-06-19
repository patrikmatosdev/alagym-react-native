import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 170,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#eeeeee',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  containerTitle: {
    bottom: 0,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
