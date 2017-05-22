import AUDIO from '../audio';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => state.player;

const mapDispatchToProps = (dispatch, ownProps) => {
  AUDIO.addEventListener('ended', () => dispatch(next()));
  AUDIO.addEventListener('timeupdate', () => {
    dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
  });
  return ({
    next: () => dispatch(next()),
    prev: () => dispatch(previous()),
    toggle: (currentSong, currentSongList) => dispatch(toggleSong(currentSong, currentSongList))
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);
