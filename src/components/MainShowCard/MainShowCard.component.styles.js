import { StyleSheet } from 'react-native';
import { SETTINGS } from '../../utils';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  single_genre: {
    marginRight: 15
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  genres: {
    width: '100%',
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    width: SETTINGS.W_Width,
    height: SETTINGS.W_Height * .5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  card: {
    alignItems: 'center',
    flex: 1
  },  
  touchable_wrapper: {
    position: 'absolute',
    zIndex: 1000,
    width: 40,
    height: 40,
    top: '80%',
    left: '80%'
  },
  play_icon_wrapper: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.gold,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5
  },
  icon: {
    width: 20,
    height: 20
  }
});