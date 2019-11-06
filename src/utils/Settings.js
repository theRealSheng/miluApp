import axios from 'axios';
import { Dimensions, Platform } from 'react-native';
import { STRINGS } from '../constants';
const { height, width } = Dimensions.get('window');

const SETTINGS = {
  isIOS: Platform.OS === 'ios',
  W_Height: height,
  W_Width: width,
  Movie_Base_Api: axios.create({
    baseURL: `${STRINGS.BaseUrl}`,
    timeout: 3500,
  }),
  screenNavOptions: {
    navigationOptions: {
      header: null
    }
  }
}

export { SETTINGS };