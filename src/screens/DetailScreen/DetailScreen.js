import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';

import styles from './DetailScreen.component.styles';
import { ROUTES } from '../../constants';
import {
  DefaultImage,
  DefaultTouchable,
  Loading,
  StandardLeftArrowIcon,
} from '../../components';
import PlayIcon from '../../assets/svg/play_arrow.svg';

class DetailScreen extends Component {
  state = {
    show: undefined,
  }

  componentDidMount() {
    const show = this.props.navigation.getParam('show', undefined);
    if (show) {
      this.setState({ show: JSON.parse(show) });
    }
  }

  render() {
    const { show } = this.state;
    const { navigation } = this.props;

    if (!show) {
      return <Loading />;
    }

    const {
      poster_path,
      original_title,
      overview,
    } = show;

    return (
      <ScrollView style={styles.fill_space}>
        <View style={styles.container}>
          <View style={styles.heading_wrapper}>
            <StandardLeftArrowIcon
              arrowSize={styles.icon}
              arrowWrapperStyles={styles.icon_wrapper}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.image_wrapper}>
            <DefaultImage
              imageUrl={poster_path}
              imageStyle={styles.image}
            />
          </View>
          <View style={styles.touchable_wrapper}>
            <DefaultTouchable
              onPress={() => navigation.navigate(ROUTES.VideoScreen)}
              item={(
                <View style={styles.play_icon_wrapper}>
                  <PlayIcon {...styles.icon} />
                </View>
              )}
            />
          </View>
          <View style={styles.show_wrapper}>
            <Text style={styles.title}>{original_title}</Text>
            <Text style={styles.overview}>{overview}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

DetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export { DetailScreen };
