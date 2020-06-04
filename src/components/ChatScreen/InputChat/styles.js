import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    // padding: 10,
    overflow: 'hidden',
    backgroundColor: 'blue',
    flexDirection: 'row',
  },

  colIcon: {
    flexBasis: 50,
    flexShrink: 0,
    flexGrow: 0,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
