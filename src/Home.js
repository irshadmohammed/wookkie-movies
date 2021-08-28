import React, { Component } from 'react';
import './Home.css'
import Movie from './Movie';

class Home extends Component {
  render() {
    return (
      <>
      {/* Render Header part */}
        <div className="box-container">
          <div className="left-section">
            <h3>Wookie Movies</h3>
          </div>
          <div className="right-section">
            <input
              className="input-container"
              type='text'
              placeholder='Text goes here'
            />
          </div>
        </div>
        {/* Render Genre Section */}
        <Movie />
      </>
    )
  }
}

export default Home