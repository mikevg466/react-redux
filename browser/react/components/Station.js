import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';

const DUMMY_TOGGLE_ONE = function () {};

export default function Station (props) {
	return (
		<div>
		<h2>{props.routeParams.stationGenre} Station</h2>
		<Songs songs={props.songs} currentSong={props.currentSong}
				isPlaying={props.isPlaying} toggleOne={DUMMY_TOGGLE_ONE} />
		</div>
		)
}
