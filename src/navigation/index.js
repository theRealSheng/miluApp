import React from 'react';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { NavigationIcon, NavigationLabel } from '../components';
import { COLORS, DIMENSIONS, ROUTES } from '../constants';
import HomeScreenStack from './HomeScreenStack';

const MainNavigator = createBottomTabNavigator({
  [ROUTES.Home]: HomeScreenStack,
  [ROUTES.Search]: HomeScreenStack,
  [ROUTES.ComingSoon]: HomeScreenStack,
  [ROUTES.Download]: HomeScreenStack,
  [ROUTES.More]: HomeScreenStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const tabBarIcon = ({ focused }) => <NavigationIcon active={focused} navigation={navigation} />;
      const tabBarLabel = ({ focused }) => <NavigationLabel active={focused} navigation={navigation} />;

      return {
        tabBarIcon,
        tabBarLabel,
      };
    },
    tabBarOptions: {
      initialRouteName: ROUTES.Home,
      style: {
        ...DIMENSIONS.bottomNavHeight,
        backgroundColor: COLORS.black
      },
      tabStyle: {
        justifyContent: 'center'
      }
    }
  }
);

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
