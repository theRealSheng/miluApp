import React from 'react';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { View } from 'react-native';

import { NavigationIcon, NavigationLabel } from '../components';
import { COLORS, DIMENSIONS, ROUTES } from '../constants';
import { SETTINGS } from '../utils';
import HomeScreenStack from './HomeScreenStack';
import SearchScreenStack from './SearchScreenStack';

const MainNavigator = createBottomTabNavigator({
  [ROUTES.Home]: HomeScreenStack,
  [ROUTES.Search]: SearchScreenStack,
  [ROUTES.ComingSoon]: HomeScreenStack, // repeted on purpose
  [ROUTES.Download]: HomeScreenStack, // repeted on purpose
  [ROUTES.More]: HomeScreenStack // repeted on purpose
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
        backgroundColor: COLORS.black,
        position: 'absolute'
      },
      tabStyle: {
        justifyContent: 'center'
      }
    }
  }
);

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
