import React from 'react';
import { Text, View } from 'react-native';

import styles from './MainShowCard.component.styles';
import { DefaultImage } from '../DefaultImage';

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
)

const MainShowCard = ({ show }) => {
  if(!show) return null;
  
  return (
  <View style={styles.container}>
    <View style={styles.card}>
      {renderPoster(show)}
    </View>
  </View>
);}

export { MainShowCard };