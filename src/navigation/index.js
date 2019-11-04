/* eslint-disable react/prop-types */
import React from 'react';
import { createAppContainer } from "react-navigation";
import NavigationService from './NavigationService';

const AppNavigator = createAppContainer(MainNavigator);

export default class Nav extends React.Component {
  render() {
    return (
      <AppNavigator ref={(navigatorRef) => NavigationService.setNavigator(navigatorRef)} />
    );
  }
}
