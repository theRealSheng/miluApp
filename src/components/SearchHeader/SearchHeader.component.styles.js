import { StyleSheet } from 'react-native';
import { COLORS,  } from '../../constants';

export default StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
    marginBottom: 20,
    marginTop: 20
  },
  icon_wrapper: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginRight: 30,
    justifyContent: 'center'
  },
  arrow: {
    height: 25,
    width: 25
  },
  input: {
    height: 40,
    width: '70%',
    color: COLORS.white,
    fontSize: 18,
  },
  close: {
    height: 20,
    width: 20
  }
});