import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import NavigationService from './NavigationService';

import { NavigationIcon, NavigationLabel } from 'components';

const MainNavigator = createBottomTabNavigator({
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      const tabBarIcon = ({ focused }) => <NavigationIcon active={focused} navigation={navigation} />;
      const tabBarLabel = ({ focused }) => <NavigationLabel active={focused} navigation={navigation} />;

      return {
        tabBarIcon,
        tabBarLabel,
      };
    }
  });

const AppNavigator = createAppContainer(MainNavigator);

export default class Nav extends React.Component {
  render() {
    return (
      <AppNavigator ref={(navigatorRef) => NavigationService.setNavigator(navigatorRef)} />
    );
  }
}
