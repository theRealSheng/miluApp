import React from 'react';
import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { COLORS } from '../constants';

const DefaultTouchable = ({ onPress, item }) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity onPress={onPress}>
        {item}
      </TouchableOpacity>
    )
  }
  return (
    <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple(COLORS.white)}>
      {item}
    </TouchableNativeFeedback>
  )
};

export { DefaultTouchable };