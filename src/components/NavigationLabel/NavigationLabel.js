import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { COLORS, FONTSIZE } from 'constants';
import { TypoGraphyOpenSans } from 'components';

const NavigationLabel = ({ active, navigation }) => {
  const { routeName, routes } = navigation.state;
  const textStyle = (routes.length > 1 || !active) ? { ...styles.main, ...styles.light } : styles.main;

  return routeName ?
    <TypoGraphyOpenSans style={textStyle} text={routeName} />
    :
    <TypoGraphyOpenSans text={"..."} />;
};

const styles = StyleSheet.create({
  main: {
    color: COLORS.main,
    textAlign: 'center',
    ...FONTSIZE.extre_small,
    fontWeight: '600',
    paddingBottom: 5,
    paddingTop: 5
  },
  light: {
    color: COLORS.neutral_medium,
    fontWeight: '300'
  }
});

NavigationLabel.propTypes = {
  active: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired
};

export { NavigationLabel };