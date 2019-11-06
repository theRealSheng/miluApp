import React from 'react';
import PropType from 'prop-types';
import { Text, StyleSheet } from 'react-native';

import { COLORS } from '../../constants';

const NavigationLabel = ({ active, navigation }) => {
  const { routeName, routes } = navigation.state;
  const textStyle = (routes.length > 1 || !active) ? { ...styles.selected, ...styles.standBy } : styles.selected;
  if (!routeName) return null;
  return <Text style={textStyle}>{routeName}</Text>;
};

const styles = StyleSheet.create({
  selected: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  standBy: {
    color: COLORS.nav,
    fontWeight: '300',
  },
});

NavigationLabel.propTypes = {
  active: PropType.bool.isRequired,
  navigation: PropType.object.isRequired,
};

export { NavigationLabel };
