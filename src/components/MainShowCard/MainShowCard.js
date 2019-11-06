import React from 'react';
import { Text, View } from 'react-native';

import styles from './MainShowCard.component.styles';
import { DefaultImage } from '../DefaultImage';
import { DefaultTouchable } from '../DefaultTouchable';
import PlayIcon from '../../assets/svg/play_arrow.svg';

const renderGenres = (genre_ids) => (
  genre_ids.map((genre, index) => {
    if (index === genre_ids.length -1) {
      return <Text key={index} style={styles.single_genre}>   {genre.name}</Text>
    } 
      
    return <Text key={index} style={styles.single_genre}>   {genre.name}   *</Text>
  }
));

const renderPoster = (show) => (
  <View style={{ flex: 1 }}>
    <DefaultImage imageUrl={show.poster_path} imageStyle={styles.image} />
    <Text numberOfLines={1} style={styles.genres}>
      {renderGenres(show.genre_ids)}
    </Text>
  </View>
);

const MainShowCard = ({ show, onPress, OnPressPlay }) => {
  if(!show) return null;
  
  return (
    <DefaultTouchable
      onPress={onPress}
      item={(
        <View style={styles.container}>
          <View style={styles.card}>
            {renderPoster(show)}
          </View>
          <View style={styles.touchable_wrapper}>
              <DefaultTouchable
                onPress={OnPressPlay}
                item={(
                  <View style={styles.play_icon_wrapper}>
                    <PlayIcon {...styles.icon} />
                  </View>
                )}
              />
          </View>
        </View> 
      )}
    />
  );
};

export { MainShowCard };