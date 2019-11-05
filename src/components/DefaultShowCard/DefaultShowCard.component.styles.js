import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  card: {
    flex: 1,
    width: 100,
    marginRight: 5,
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    marginBottom: 3
  },
  info_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: COLORS.gold,
    borderWidth: .5,
    height: 25
  },
  rating: {
    color: COLORS.white,
    fontSize: 12
  },
  info_icon: {
    width: 20,
    height: 20
  }
})