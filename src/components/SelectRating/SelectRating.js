import React from 'react';
import PropTypes from 'prop-types';
import { AirbnbRating } from 'react-native-ratings';
import { COLORS } from '../../constants';

const SelectRating = ({ personalRate, onFinishRating }) => (
  <AirbnbRating
    count={5}
    reviews={['Terrible', 'Bad', 'OK', 'Amazing', 'Unbelievable']}
    selectedColor={COLORS.gold}
    tintColor={COLORS.secondary}
    imageSize={10}
    ratingCount={5}
    startingValue={personalRate}
    onFinishRating={onFinishRating}
    reviewSize={15}
  />
);

SelectRating.propTypes = {
  personalRate: PropTypes.number.isRequired,
  onFinishRating: PropTypes.func.isRequired,
};

export { SelectRating };