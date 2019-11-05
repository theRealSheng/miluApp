import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { DefaultTouchable } from '../../DefaultTouchable';
import ArrowLeftIcon from '../../../assets/svg/arrow_left.svg';

const StandardLeftArrowIcon = ({
  onPress, 
  arrowSize, 
  arrowWrapperStyles
}) => (
  <DefaultTouchable
    onPress={() => onPress()}
    item={(
      <View style={arrowWrapperStyles}>
        <ArrowLeftIcon {...arrowSize} />
      </View>
    )}
  />
)

StandardLeftArrowIcon.propTypes = {
  onPress: PropTypes.func.isRequired,
  arrowSize: PropTypes.object.isRequired,
  arrowWrapperStyles: PropTypes.object.isRequired
}

export { StandardLeftArrowIcon };