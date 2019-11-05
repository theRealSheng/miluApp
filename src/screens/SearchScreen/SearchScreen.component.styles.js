import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  no_shows: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center'
  }
});