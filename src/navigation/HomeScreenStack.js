import { createStackNavigator } from 'react-navigation-stack';

import { DetailScreen } from '../screens/DetailScreen';
import { MainScreen } from '../screens/MainScreen';
import { COLORS } from '../constants';
import { SETTINGS } from '../utils';

export default HomeScreenStack = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
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