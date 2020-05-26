import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexBasis: 80,
    flexShrink: 0,
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
