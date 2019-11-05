import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';

import Assets from '../../Assets';
import { ROUTES } from '../../constants';

const NavigationIcon = ({ active, navigation }) => {
  const { routeName , routes } = navigation.state;
  const routedictironary = {
    [ROUTES.Home]: {
      normal: Assets.icons['home'],
      selected: Assets.icons['home_selected']
    },
    [ROUTES.Search]: {
      normal: Assets.icons['search'],
      selected: Assets.icons['search_selected']
    },
    [ROUTES.ComingSoon]: {
      normal: Assets.icons['video'],
      selected: Assets.icons['video_selected']
    },
    [ROUTES.Download]: {
      normal: Assets.icons['download'],
      selected: Assets.icons['download_selected']
    },
    [ROUTES.More]: {
      normal: Assets.icons['more'],
      selected: Assets.icons['more_selected']
    },
  };

  let type = active && routes.length === 1? 'selected' : 'normal';
  return (
    <View style={styles.image_wrapper}>
      <Image source={routedictironary[routeName][type]} style={styles.icon}/>
    </View>
  )
};

const styles = StyleSheet.create({
  image_wrapper: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20,
  }
});

NavigationIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired
};

export { NavigationIcon };