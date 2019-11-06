import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';
import { SETTINGS } from '../../utils';

export default StyleSheet.create({
  warning_wrapper: {
    position: 'absolute',
    zIndex: 1000,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 25,
    textAlign: 'center',
    width: 120,
    color: COLORS.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    width: SETTINGS.W_Height,
    height: SETTINGS.W_Width,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
  },
});
