import React from 'react';
import PropTypes from 'prop-types';
import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

import { COLORS } from '../constants';

const DefaultTouchable = ({ onPress, item }) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity onPress={onPress}>
        {item}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple(COLORS.white)}>
      {item}
    </TouchableNativeFeedback>
  );
};

DefaultTouchable.propTypes = {
  onPress: PropTypes.func.isRequired,
  item: PropTypes.element.isRequired,
};

export { DefaultTouchable };
