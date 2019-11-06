import React from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './DefaultImage.component.styles';
import { STRINGS } from '../../constants';
import ASSETS from '../../Assets';

const renderNoPhoto = () => (
  <View style={styles.no_photo}>
    <Image source={ASSETS.images['no-photo']} style={styles.no_photo_image} />
  </View>
);

const renderImage = (imageUrl, imageStyle) => (
  <Image source={{ uri: `${STRINGS.ImagesBaseUrl}${imageUrl}` }} style={imageStyle} />
);

const DefaultImage = ({ imageUrl, imageStyle }) => {
  const backgroundStyle = imageUrl ? styles.container : styles.no_photo;
  return (
    <View style={backgroundStyle}>
      {imageUrl ? renderImage(imageUrl, imageStyle) : renderNoPhoto()}
    </View>
  );
};

DefaultImage.propTypes = {
  imageUrl: PropTypes.string,
  imageStyle: PropTypes.object.isRequired,
};

export { DefaultImage };
