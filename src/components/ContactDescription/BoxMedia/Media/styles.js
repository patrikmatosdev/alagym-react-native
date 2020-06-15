import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'row',
  },

  containerMedia: {
    flexGrow: 0,
    flexShrink: 0,
    width: 70,
    height: 70,
  },

  media: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
