import { createStackNavigator } from 'react-navigation-stack';

import { MainScreen } from '../screens/MainScreen';
import { DetailScreen } from '../screens/DetailScreen';
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