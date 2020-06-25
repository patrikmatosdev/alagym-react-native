import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 50,
    flexDirection: 'row',
    backgroundColor: '#191970',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },

  containerSerie: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  containerRepetition: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },

  containerTime: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default styles;
