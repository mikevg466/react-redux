import {connect} from 'react-redux';
import Station from '../components/Station';

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps);
	console.log(state);
	/* Use ownProps.RouteParams.stationGenre, filter state.songs*/
	// ({stations: state.songs})
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Station);
