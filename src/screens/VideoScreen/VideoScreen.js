import React from 'react';
import Video from 'react-native-video';
import { StatusBar, View, ViewPropTypes } from 'react-native';
import Orientation from 'react-native-orientation-locker';

import { Loading } from '../../components';
import styles from './VideoScreen.component.styles';

class VideoScreen extends React.Component {
  state = {
    buffering: false,
    error: false,
    pause: false
  }

  componentDidMount() {
    Orientation.lockToLandscape();
  }

  componentWillUnmount() {
    Orientation.lockToPortrait();
  }

  renderErrorMessage = () => {
    if (this.state.error) {
      const { styles } = this.props;
      return (
        <View style={styles.warning_wrapper}>
          <Text style={styles.error}>An error has occured, please try again</Text>;
        </View>
      )
    }
  }

  loading = () => {
    if (this.state.loading) {
      const { styles } = this.props;
      return (
        <View style={styles.warning_wrapper}>
          <Loading />
        </View>
      )
    }
  }

  videoError = () => {
    if (!this.state.error) {
      this.setState({ error: true });
    }
    
    if (this.state.error) {
      setTimeout(() => {
        return this.props.navigation.goBack()
      }, 1500);
    }
  }
  
  render() {
    const { styles } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Video 
          controls
          resizeMode={"cover"}
          source={{uri: "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"}}   
          ref={(ref) => { this.player = ref }}                                 
          onBuffer={() => this.setState({ buffering: true })}                
          onError={this.videoError}               
          style={styles.backgroundVideo} 
        />
        {this.loading()}
        {this.renderErrorMessage()}
      </View>
    )
  }
}

VideoScreen.defaultProps = {
  styles
}

VideoScreen.propTypes = {
  styles: ViewPropTypes.styles
}

export { VideoScreen };