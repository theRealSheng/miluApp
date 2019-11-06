import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import RNLocky from "react-native-scroll-locky";
import Orientation from 'react-native-orientation-locker';

import styles from './MainScreen.component.styles';
import { SETTINGS } from '../../utils';
import { DIMENSIONS, ROUTES, STRINGS } from '../../constants';
import { 
	Carousel,
	DefaultTouchable,
	DefaultShowCard,
	DefaultStatusBar,
	MainShowCard,
	Loading
} from '../../components';
import { fetchMoviesRequested } from '../../store/movies';

class MainScreen extends Component {
	constructor(props) {
    super(props);
		this.state = {
			display: undefined,
			showHash: {},
			showList: []
		}
    this.directionLockPanHandler = new RNLocky(
      RNLocky.Direction.VERTICAL
		);
	}

	componentDidMount() {
		this.props.fetchMoviesRequested();
    Orientation.lockToPortrait();
	}

	componentDidUpdate(prevProps) {
		// Initialized data
		// The proper way will be to fetch the data after log in or another page
		const { movies,	tvs } = this.props;
		const { display } = this.state;
		if (display === undefined && Object.values(movies).length > 0) {
			return this.changeDisplay(STRINGS.Movies)
		}

		if (prevProps !== this.props) {
			return true;
		}

		return false;
	}

	renderListByGenre = () => {
		const { navigation } = this.props;
		const { showList } = this.state;

		if (!showList) return null;

		let counter = 1;
		return Object.keys(showList).map((genreKey) => {
			counter++;
			const list = showList[genreKey].map((show) => (
				<DefaultShowCard 
					key={counter % 0 === 0? `${show.title}${genreKey}`: `${show.poster_path}${show.overview}`} 
					onPress={() => navigation.navigate(ROUTES.DetailScreen, { show: JSON.stringify(show) })}
					show={show} />
				));
			return (
				<Carousel 
					key={`${JSON.stringify(showList[genreKey])}${genreKey}${counter}`} 
					heading={genreKey} 
					list={list}
				/>
			)
		})
	};

	changeDisplay = (changeView) => {
		const { display, showList } = this.state;
		const { 
			movies, 
			genresMoviesHash,
			tvs,
			genresTvsHash
		} = this.props;
		if (changeView === display) return;
		if (changeView === STRINGS.Movies && showList !== movies) {
			this.setState({
				display: STRINGS.Movies,
				showHash: genresMoviesHash,
				showList: movies
			})
		} else if (changeView === STRINGS.Tvs && showList !== tvs) {
			this.setState({
				display: STRINGS.Tvs,
				showHash: genresTvsHash,
				showList: tvs
			})
		} 
	}

	renderHeading = () => {
		const { display } = this.state;
		const movieStyle = display === STRINGS.Movies? styles.highlight_heading : styles.heading;
		const tvStyle = display === STRINGS.Tvs? styles.highlight_heading : styles.heading;
		return (
			<View style={styles.heading_container}>
					<DefaultTouchable
						onPress={() => this.changeDisplay(STRINGS.Movies)}
						item={(
							<View style={styles.header_section}>
								<Text style={movieStyle}>Movies</Text>
							</View>
						)}
					/>
					<DefaultTouchable
						onPress={() => this.changeDisplay(STRINGS.Tvs)}
						item={(
						<View style={styles.header_section}>
							<Text style={tvStyle}>On Tv</Text>
						</View>
						)}
					/>
			</View>
		)
	}
	
	renderView = () => {
		const { error, loading, navigation } = this.props;
		const { showHash, showList } = this.state;

		if (error) {
			return <Text>Error</Text>;
		}
		
		if (loading || !showList) {
			return <Loading />;
		}

		if (!loading && !showList && !error) {
			return <Text>Sorry, an error has occurred. Please close the app and try again.</Text>;
		}

		let mostPopularShow = showList.popular? {...showList.popular[0]} : undefined;

		if (mostPopularShow) {
			if (mostPopularShow.genre_ids.length > 3) {
				let displayGenereList = mostPopularShow.genre_ids.slice(0,3);
				mostPopularShow.genre_ids = displayGenereList.map((genreId) => showHash[genreId]);
			} else {
				mostPopularShow.genre_ids = mostPopularShow.genre_ids.map((genreId) => showHash[genreId]);
			}
		}

		return (
			<View style={styles.fill_space}>
				<MainShowCard 
					show={mostPopularShow} 
					onPress={() => navigation.navigate(ROUTES.DetailScreen, { show: JSON.stringify(showList.popular[0]) })}
					OnPressPlay={() => navigation.navigate(ROUTES.VideoScreen)}
				/>
				{this.renderHeading()}
				{this.renderListByGenre()}
      </View>
		)
	}

	renderStatusBar = () => !DIMENSIONS || !SETTINGS? null : <DefaultStatusBar />;
	
	render() {
		return (
			<ScrollView {...this.directionLockPanHandler.getPanHandlers()} style={styles.fill_space}>
				{this.renderStatusBar()}
				{this.renderView()}
			</ScrollView>
		)
	}
}

MainScreen.defaultProps = {
	styles
}

MainScreen.propTypes = {
	movies: PropTypes.object.isRequired,
	tvs: PropTypes.object.isRequired,
	genresMoviesHash: PropTypes.object.isRequired,
	genresTvsHash: PropTypes.object.isRequired,
	loading: PropTypes.boolean,
	error: PropTypes.string,
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies.movieListByGenres,
		tvs: state.tvs.tvListByGenres,
		genresMoviesHash: state.movies.genresMoviesHash,
		genresTvsHash: state.tvs.genresTvHash,
		loading: (state.movies.loading || state.tvs.loading),
		error: state.movies.error || state.tvs.error,
	}
}

const mapDispatchToProps = {
	fetchMoviesRequested
}

MainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export { MainScreen };