import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexBasis: 100,
    flexGrow: 0,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
