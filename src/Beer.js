
import React from 'react';

const Beer = ({ beer, liked, disliked }) => {
  return (
    <div className="beer">
      <h2 className={beer.liked ? 'active' : 'inactive'}>{beer.name}</h2>
      <p>Tagline: {beer.tagline}</p>
      <p>ABV: {beer.abv}%</p>
      <p>Description: {beer.description}</p>
      <button type='button' onClick={liked}>Like</button>
      <button type='button'onClick={disliked}>Dislike</button>
    </div>
  );
};

export default Beer;