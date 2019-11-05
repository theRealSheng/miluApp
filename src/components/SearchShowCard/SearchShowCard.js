import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import { STRINGS } from '../../constants';

import ASSETS from '../../Assets';
import styles from './SearchShowCard.component.styles';
import { DefaultImage } from '../DefaultImage';
import { DefaultTouchable } from '../DefaultTouchable';
import { ShowRating } from '../ShowRating';
import { SelectRating } from '../SelectRating';

class SearchShowCard extends Component {
  state = {
    personalRate: {}, // Temporary save in component to just show the display
    displayGeneralRating: true
  }

  renderRatingSection = (show) => {
    const { displayGeneralRating, personalRate } = this.state;
    const userRatedShow = personalRate[show.id];
    if (displayGeneralRating) {
      return (
        <View style={styles.show_info_wrapper}>
          <Text style={styles.title}>{show.title}</Text>
          <Text numberOfLines={4} style={styles.overview}>{show.overview}</Text>
          <View style={styles.rating_wrapper}>
            <ShowRating rating={show.vote_average} type={STRINGS.RatingStar} />
            <View>
              <DefaultTouchable
                onPress={() => this.setState({ displayGeneralRating: false })}
                item={(
                  <Text style={userRatedShow? styles.rated_text: styles.rate_text}>
                    {userRatedShow? "Rated!" : "Rate it"}
                  </Text>
                )}
              />
            </View>
          </View>
        </View>
      )
    } 
    return (
      <View style={styles.show_info_wrapper}>
        <View style={styles.select_rating_wrapper}>
          <SelectRating 
            personalRate={userRatedShow || 3} 
            type={STRINGS.RatingStar} 
            onFinishRating={(num) => setTimeout(() => {
              this.setState({ 
                  personalRate: {
                    ...personalRate,
                    [show.id]: num
                  },
                  displayGeneralRating: true
              })
            }, 500)}
          />
          <View style={styles.cancel_wrapper}>
            <DefaultTouchable
              onPress={() => this.setState({ displayGeneralRating: true })}
              item={<Text style={styles.cancel}>Cancel</Text>}
            />
          </View>
        </View>
      </View>
    )
  }
  

  render() {
    const { show, onPressImage } = this.props;
    if (!show) {
      return null;
    }
    return (
      <View style={styles.card_container}>
        <DefaultTouchable
          onPress={onPressImage}
          item={(
            <View style={styles.image_wrapper}>
              <DefaultImage 
                imageUrl={show.poster_path}
                imageStyle={styles.image}
              />
              <Image source={ASSETS.icons['info']} style={styles.info_icon}/>
            </View>
          )}
        />
        {this.renderRatingSection(show)}
      </View>
    )
  }
};

SearchShowCard.propTypes = {
  show: PropTypes.object.isRequired,
  onPressImage: PropTypes.func.isRequired
};

export { SearchShowCard };