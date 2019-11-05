import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import RNLocky from "react-native-scroll-locky";

import { SETTINGS } from '../../utils';
import { DIMENSIONS, ROUTES } from '../../constants';
import { 
	Carousel,
	DefaultShowCard,
	DefaultStatusBar,
	MainShowCard,
	Loading
} from '../../components';
import { fetchAllMoviesRequested } from '../../store/movies';

class MainScreen extends Component {
	constructor(props) {
    super(props);
    this.directionLockPanHandler = new RNLocky(
      RNLocky.Direction.VERTICAL
    );
	}
	
	componentDidMount() {
		this.props.fetchAllMoviesRequested();
	}

	renderListByGenre = () => {
		const { navigation, movies } = this.props;

		if (!movies) return null;

		return Object.keys(movies).map((genreKey) => {
			const list = movies[genreKey].map((show) => (
				<DefaultShowCard 
					key={show.title} 
					onPress={() => navigation.navigate(ROUTES.DetailScreen, { show: JSON.stringify(show) })}
					show={show} />
				));
			return <Carousel key={genreKey} heading={genreKey} list={list}/>
		})
	};
	
	renderView = () => {
		const { 
			error, 
			genresMoviesHash,
			loading, 
			movies,
		} = this.props;

		if (error) {
			return <Text>Error</Text>;
		}
		
		if (loading || !movies) {
			return <Loading />
		}

		if (!loading && !movies && !error) {
			return <Text>Sorry, an error has occurred. Please close the app and try again.</Text>;
		}

		let mostPopularMovie = movies.popular? {...movies.popular[0]} : undefined;

		if (mostPopularMovie) {
			if (mostPopularMovie.genre_ids.length > 3) {
				let displayGenereList = mostPopularMovie.genre_ids.slice(0,3);
				mostPopularMovie.genre_ids = displayGenereList.map((genreId) => genresMoviesHash[genreId]);
			} else {
				mostPopularMovie.genre_ids = mostPopularMovie.genre_ids.map((genreId) => genresMoviesHash[genreId]);
			}
		}

		return (
			<View style={{ flex: 1 }}>
				<MainShowCard show={mostPopularMovie}/>
				{this.renderListByGenre()}
      </View>
		)
	}

	renderStatusBar = () => !DIMENSIONS || !SETTINGS? null : <DefaultStatusBar />;
	
	render() {
		return (
			<ScrollView {...this.directionLockPanHandler.getPanHandlers()} style={{ flex: 1 }}>
				{this.renderStatusBar()}
				{this.renderView()}
			</ScrollView>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies.listByGenres,
		genresMoviesHash: state.movies.genresMoviesHash,
		loading: state.movies.loading,
		error: state.movies.error
	}
}

const mapDispatchToProps = {
	fetchAllMoviesRequested
}

MainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

export { MainScreen };