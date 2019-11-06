import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  show_info_wrapper: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: COLORS.gold,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  overview: {
    color: COLORS.white,
    fontSize: 13,
  },
  rating_wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rated_text: {
    color: COLORS.ok,
  },
  rate_text: {
    color: COLORS.ko,
    paddingRight: 10,
  },
  select_rating_wrapper: {
    alignItems: 'center',
  },
  cancel_wrapper: {
    height: 40,
    paddingTop: 5,
  },
  cancel: {
    color: COLORS.ko,
    paddingRight: 10,
    fontSize: 16,
  },
  card_container: {
    flexDirection: 'row',
    height: 140,
    width: '100%',
    backgroundColor: COLORS.secondary,
    margin: 5,
  },
  image_wrapper: {
    width: 80,
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  info_icon: {
    position: 'absolute',
    top: 5,
    left: 5,
    width: 15,
    height: 15,
  },
});
