import { Platform, StyleSheet } from 'react-native';
import { COLORS, DIMENSIONS } from '../../constants';
import { SETTINGS } from '../../utils';

export default StyleSheet.create({
  container: {
    height: SETTINGS.W_Height - DIMENSIONS.bottomNavHeight.height,
    width: SETTINGS.W_Width,
  },
  heading_wrapper: {
    flexDirection: 'row',
    zIndex: 100,
    top: 20,
    paddingLeft: 20,
    position: 'absolute',
  },
  icon_wrapper: {
    height: 30,
    width: 30,
  },
  image_wrapper: {
    width: '100%',
    height: '70%',
    borderColor: 'blue',
  },
  image: {
    flex: 1,
    backgroundColor: COLORS.main
  },
  touchable_wrapper: {
    position: 'absolute',
    zIndex: 100,
    top: '65%',
    left: SETTINGS.W_Width - 80,
  },
  play_icon_wrapper: {
    width: 60,
    height: 60,
    borderRadius: 80,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.neutral_dark,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: .2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    })
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 7
  },
  show_wrapper: {
    padding: 20,
    paddingTop: 25
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: COLORS.gold
  },
  overview: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 15,
    color: COLORS.white
  }
});