import React from 'react';
import {Link} from 'react-router';
import Songs from './Songs';


const DUMMY_GENRE_NAME = 'Jazz';
const DUMMY_SONGS = [{
  id: 1,
  name: "A Love Supreme",
  genre: "Jazz",
  artists: [{ name: "John Coltrane" }]
}];
const DUMMY_CURRENT_SONG = {};
const DUMMY_IS_PLAYING = false;
const DUMMY_TOGGLE_ONE = function () {};





export default function Station (props) {
	console.log(props);
	return (
		<div>
		<h2>{props.routeParams.stationGenre} Station</h2>
		<Songs songs={DUMMY_SONGS} currentSong={DUMMY_CURRENT_SONG}
				isPlaying={DUMMY_IS_PLAYING} toggleOne={DUMMY_TOGGLE_ONE} />
		</div>
		)
}