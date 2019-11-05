import { StyleSheet } from 'react-native';
import { SETTINGS } from '../../utils';

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
})