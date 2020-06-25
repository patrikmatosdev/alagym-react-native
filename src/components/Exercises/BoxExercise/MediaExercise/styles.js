import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 250,
  },

  containerImage: {
    flex: 1,
  },

  containerButton: {
    position: 'absolute',
    bottom: -25,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
