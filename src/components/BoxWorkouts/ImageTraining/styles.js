import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginRight: 10,
    width: 120,
    height: 170,
    borderRadius: 7,
    overflow: 'hidden',
    backgroundColor: '#eef',
  },

  image: {
    width: '100%',
    height: 110,
  },

  containerTitle: {
    height: 50,
    justifyContent: 'center',
    paddingVertical: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
