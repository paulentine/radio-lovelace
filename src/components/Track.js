import React, { Component } from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/

// const Track = ({title, artist, playtime, albumart, favorite}) => {
class Track extends Component {
  constructor(props) {
   super(props);
   this.state = { favorite: false }; 
  };

  onChange = () => {
    console.log(this)
    this.setState({ favorite: !this.state.favorite })
  }

  render () {
    return (
      <li className="track">
        <img className="track--albumart" alt={`album art for ${this.props.title}`} src={this.albumart} />
        <h3 className="track--title">{this.props.title}</h3>
        <input
          type="checkbox"
          className="track--favorite"
          checked={!this.state.favorite}
          onChange={this.onChange}
        />
        <p className="track--artist">{this.props.artist}</p>
        <p className="track--playtime">{this.props.playtime}</p>
        <button
          className="track--control track--to-top"
          >
          <span role="img" aria-label="send to top">🔝</span>
        </button>
        <button
          className="track--control track--switch"
          >
          <span role="img" aria-label="switch lists">↔</span>
        </button>
      </li>
    );
  }
};

Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  favorite: PropTypes.bool,
}

export default Track;
