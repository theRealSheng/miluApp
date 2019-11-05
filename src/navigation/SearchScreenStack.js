import { createStackNavigator } from 'react-navigation-stack';

import { SearchScreen } from '../screens/SearchScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { COLORS } from '../constants';
import { SETTINGS } from '../utils';

export default SearchScreenStack = createStackNavigator({
  SearchScreen: {
    screen: SearchScreen,
    ...SETTINGS.screenNavOptions
  },
  DetailScreen: {
    screen: DetailScreen,
    ...SETTINGS.screenNavOptions
  }
  }, 
  {
    cardStyle: { backgroundColor: COLORS.black },
  }
)