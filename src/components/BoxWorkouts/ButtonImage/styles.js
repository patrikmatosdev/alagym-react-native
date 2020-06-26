import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 170,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#eeeeee',
    elevation: 10,
  },

  containerImage: {
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  containerTitle: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
    backgroundColor: '#191970',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
