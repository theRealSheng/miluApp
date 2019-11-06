import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import styles from './SearchScreen.component.styles';
import { ROUTES } from '../../constants';
import {
	DefaultFlatList,
	SearchHeader,
	SearchShowCard,
} from '../../components';

class SearchScreen extends Component {
  state = {
    displayShowList: [],
    searchWord: '',
  }

  componentDidMount() {
		// For simplicity, we just search the list from the movies and shows fetched
		const { uniqueShowList } = this.props;
		if (uniqueShowList) {
			this.setState({ displayShowList: uniqueShowList });
		}
  }

  onSearchWord = (typeWord) => {
		const lowerCaseWord = typeWord.toLowerCase();
		const { uniqueShowList } = this.props;
		const displayShowList = uniqueShowList.filter((show) => {
			const {
				title,
				name,
				original_name,
			} = show;
			const matchWord = (
				(title && title.toLowerCase().includes(lowerCaseWord))
				|| (name && name.toLowerCase().includes(lowerCaseWord))
				|| (original_name && original_name.toLowerCase().includes(lowerCaseWord))
			);

			return matchWord ? show : null;
		});
		this.setState({ searchWord: typeWord, displayShowList });
  }

  renderNoShowFound = (displayShowList) => {
		if (displayShowList && displayShowList.length === 0) {
			return <Text style={styles.no_shows}>There is no shows with the keywords you have enterest</Text>;
		}
		return null;
  }

  render() {
		const { navigation } = this.props;
		const { displayShowList, searchWord } = this.state;
		return (
			<View style={styles.container}>
				<SearchHeader
					value={searchWord}
					onChangeText={(typeWord) => this.onSearchWord(typeWord)}
					clearInput={() => this.onSearchWord('')}
					navigateBack={() => navigation.navigate(ROUTES.MainScreen)}
				/>
				<DefaultFlatList
					data={displayShowList}
					renderFlatListItem={({ index, item }) => (
						<SearchShowCard
							show={item}
							key={index}
							onPressImg={() => navigation.navigate(ROUTES.DetailScreen, { show: JSON.stringify(item) })}
						/>
					)}
				/>
				{this.renderNoShowFound(displayShowList)}
			</View>
		);
  }
}

SearchScreen.propTypes = {
	uniqueShowList: PropTypes.array.isRequired,
	navigation: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => {
	return {
		moviesState: state.movies,
		tvState: state.tvs,
	};
};

const mapDispatchToProps = {};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
	const { moviesState, tvState } = propsFromState;
	const { movieListByGenres } = moviesState;
	const { tvListByGenres } = tvState;
	// putting together all movies and tvs
	let allList = [];
	Object.values(movieListByGenres).map((list) => allList = [...allList, ...list]);
	Object.values(tvListByGenres).map((list) => allList = [...allList, ...list]);

	const uniqueShowList = [];
	const showDictionary = {};
	// remove repetitive movies or shows
	allList.forEach((show) => {
		if (!showDictionary[show.id] && showDictionary[show.id] !== show) {
			uniqueShowList.push(show);
			showDictionary[show.id] = show;
		}
	});
	return {
		...propsFromState,
		...propsFromDispatch,
		...ownProps,
		uniqueShowList,
	};
};

// eslint-disable-next-line no-class-assign
SearchScreen = connect(mapStateToProp, mapDispatchToProps, mergeProps)(SearchScreen);

export { SearchScreen };
