import React from 'react';
import Video from 'react-native-video';
import PropTypes from 'prop-types';
import Orientation from 'react-native-orientation-locker';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';

import { Loading } from '../../components';
import styles from './VideoScreen.component.styles';

class VideoScreen extends React.Component {
  state = {
    buffering: false,
    error: false,
  }

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  componentWillUnmount() {
    Orientation.lockToPortrait();
  }

  renderErrorMessage = () => {
    if (this.state.error) {
      return (
        <View style={styles.warning_wrapper}>
          <Text style={styles.error}>An error has occured, please try again</Text>
        </View>
      );
    }
  }

  loading = () => {
    if (!this.state.buffering) {
      return null;
    }

    return (
      <View style={styles.warning_wrapper}>
        <Loading />
      </View>
    );
  }

  videoError = () => {
    if (!this.state.error) {
      this.setState({ error: true });
    }

    if (this.state.error) {
      setTimeout(() => this.props.navigation.goBack(), 1500);
    }
  }

  render() {
    const { navigation } = this.props;
    // controls are limited as I just used the ones provided by react-native video
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Video
          controls
          resizeMode="cover"
          onEnd={() => navigation.navigate.goBack()}
          source={{ uri: 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4' }}
          ref={(ref) => { this.player = ref; }}
          onBuffer={() => this.setState({ buffering: true })}
          onError={this.videoError}
          style={styles.backgroundVideo}
        />
        {this.loading()}
        {this.renderErrorMessage()}
      </View>
    );
  }
}


VideoScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export { VideoScreen };
