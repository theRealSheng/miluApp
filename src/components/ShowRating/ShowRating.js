import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-native-ratings';
import { COLORS } from '../../constants';

const ShowRating = ({ rating, type }) => (
  <Rating
    readonly
    type={type}
    startingValue={rating / 2 > 1? rating / 2 : .5}
    imageSize={30}
    ratingColor={COLORS.gold}
    ratingCount={5}
    tintColor={COLORS.secondary}
  />
);

ShowRating.propTypes = {
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export { ShowRating };