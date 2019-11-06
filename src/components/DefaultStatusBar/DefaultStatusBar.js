import React from 'react';
import { StatusBar, View } from 'react-native';
import { DIMENSIONS, COLORS } from '../../constants';
import { SETTINGS } from '../../utils';

const checkPlatform = () => {
  if (SETTINGS.isIOS) {
    return <StatusBar barStyle="light-content" />;
  }

  return <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />;
};

const DefaultStatusBar = () => (
  <View style={{ ...DIMENSIONS.statusBar }}>
    {checkPlatform()}
  </View>
);

export { DefaultStatusBar };
