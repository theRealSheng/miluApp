import { createStackNavigator } from 'react-navigation-stack';

import { DetailScreen } from '../screens/DetailScreen';
import { MainScreen } from '../screens/MainScreen';
import { VideoScreen } from '../screens/VideoScreen';
import { COLORS } from '../constants';
import { SETTINGS } from '../utils';

export default createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    ...SETTINGS.screenNavOptions,
  },
  DetailScreen: {
    screen: DetailScreen,
    ...SETTINGS.screenNavOptions,
  },
  VideoScreen: {
    screen: VideoScreen,
    ...SETTINGS.screenNavOptions,
  },
  },
  {
    cardStyle: { backgroundColor: COLORS.black },
  },
);
