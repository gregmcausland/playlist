import { Component } from 'react';
import { h3, ul, li } from 'react-hyperscript-helpers';
import './App.css';

const playListItem = ({
  title = 'Untitled',
  onClick = () => {},
  id,
  active,
  selected
} = {}) => {
  const activeClass = active ? '.is-active' : '';
  const selectedClass = selected ? '.is-selected' : '';
  const styles = `.playlist__item ${selectedClass} ${activeClass}`;

  return li(styles, {
    onClick: evt => onClick(id)
  }, [
    h3(title),
  ])
}

const playList = ({
  tracks,
  currentTrack,
  setActiveTrack = () => {},
  activeTrack
} = {}) => {
  const formattedTracks = tracks
    .map(track => playListItem({
      ...track,
      onClick: setActiveTrack,
      active: (activeTrack === track.id)
    }));

  return ul([ formattedTracks ]);
}

class App extends Component {
  state = { activeTrack: undefined };

  render() {
    const tracks = [
      { title: 'Slip to the void', id: 1 },
      { title: 'Cry of Achilles', id: 2 }
    ];

    return playList({
      tracks,
      activeTrack: this.state.activeTrack,
      setActiveTrack: id => this.setState({ activeTrack: id })
    });
  }
}

export default App;
