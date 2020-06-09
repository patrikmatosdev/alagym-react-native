import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 420,
  },

  containerImage: {
    // position: 'relative',
  },

  containerIcons: {
    flex: 1,
    width: '100%',
    zIndex: 100,
    position: 'absolute',
    flexDirection: 'row',
    paddingVertical: 10,
  },

  containerIconArrow: {
    flex: 1,
    justifyContent: 'center',
  },

  containerOptions: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
