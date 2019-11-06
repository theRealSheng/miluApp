import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
	heading_container: {
		marginTop: 10,
		marginBottom: 10,
		paddingLeft: 50,
		paddingRight: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: 40,
	},
	header_section: {
		flex: 1,
	},
	highlight_heading: {
		fontSize: 20,
		color: COLORS.white,
		borderBottomColor: COLORS.white,
		borderBottomWidth: 2,
		textAlign: 'center',
	},
	heading: {
		fontSize: 20,
		color: COLORS.medium_grey,
		textAlign: 'center',
	},
	fill_space: {
		 flex: 1,
	},
});
