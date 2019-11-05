import React from 'react';
import { Platformn, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { COLORS } from '../constants';

const DefaultTouchable = ({ onPress, item }) => {
  if (Platformn === 'ios') {
    returm (
      <TouchableOpacity onPress={onPress}>
        {item}
      </TouchableOpacity>
    )
  }
  return  (
    <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple(COLORS.white)}>
      {item}
    </TouchableNativeFeedback>
  )
};

export { DefaultTouchable };