import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { NavigationIcon, NavigationLabel } from '../components';
import { COLORS, DIMENSIONS, ROUTES } from '../constants';
import HomeScreenStack from './HomeScreenStack';
import SearchScreenStack from './SearchScreenStack';

const MainNavigator = createBottomTabNavigator({
  [ROUTES.Home]: HomeScreenStack,
  [ROUTES.Search]: SearchScreenStack,
  [ROUTES.ComingSoon]: HomeScreenStack, // repeated on purpose
  [ROUTES.Download]: HomeScreenStack, // repeated on purpose
  [ROUTES.More]: HomeScreenStack, // repeated on purpose
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routes } = navigation.state;
      const tabBarVisible = checkRouteVisibility(routes);
      const tabBarIcon = ({ focused }) => <NavigationIcon active={focused} navigation={navigation} />;
      const tabBarLabel = ({ focused }) => <NavigationLabel active={focused} navigation={navigation} />;

      return {
        tabBarVisible,
        tabBarIcon,
        tabBarLabel,
      };
    },
    tabBarOptions: {
      initialRouteName: ROUTES.Home,
      style: {
        ...DIMENSIONS.bottomNavHeight,
        backgroundColor: COLORS.black,
        position: 'absolute',
      },
      tabStyle: {
        justifyContent: 'center',
      },
    },
  },
);

const checkRouteVisibility = (routes) => {
  if (routes[routes.length - 1].routeName === ROUTES.VideoScreen) {
    return false;
  }
  return true;
};

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
