import React from 'react';
import { Image, Text, View } from 'react-native';

import ASSETS from '../../Assets';
import { DefaultImage } from '../DefaultImage';
import { DefaultTouchable } from '../DefaultTouchable';
import styles from './DefaultShowCard.component.styles';

const DefaultShowCard = ({ show, onPress }) => (
  <DefaultTouchable
    onPress={onPress}
    item={(
      <View style={styles.card}>
        <DefaultImage
          imageUrl={show.poster_path}
          imageStyle={styles.image}
        />
        <View style={styles.info_wrapper}>
          <Text style={styles.rating}>{show.vote_average}</Text>
          <Image source={ASSETS.icons['info']} style={styles.info_icon}/>
        </View>
      </View>
    )}
  />
);

export { DefaultShowCard };