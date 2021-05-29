import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexBasis: 80,
    width: '100%',
   },

   header: {
    borderTopStartRadius: 4,
    borderTopRightRadius: 4,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 35,
    flexDirection: 'row',
    backgroundColor: '#191970',
   },

   col1: {
    flex: 1,
    alignSelf: 'center',
   },

   col2: {
    flex: 1,
    alignSelf: 'center',
   },

   tabel: {
    paddingVertical: 10,
    backgroundColor: '#4682b4',
    flexGrow: 0,
    flexShrink: 0,
    flexDirection: 'row',
   },

  label: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
