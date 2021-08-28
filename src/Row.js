import React from 'react';
import './Row.css';

function Row({ id, name, title, rating, item, poster }) {
  return (
    <div className="row-content">
      <img
        className="row__poster"
        key={id}
        src={poster}
        alt={name}
      />
      <div>
        <h4>{title}</h4>
        <h5>Rating: {rating}</h5>
      </div>
    </div>
  )
}

export default Row
