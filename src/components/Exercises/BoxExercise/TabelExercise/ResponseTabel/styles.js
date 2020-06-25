import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 50,
    flexDirection: 'row',
    borderBottomColor: '#ddd',
    borderLeftColor: '#ddd',
    borderRightColor: '#ddd',
    borderTopColor: 0,
    borderWidth: 1,
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
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default styles;
