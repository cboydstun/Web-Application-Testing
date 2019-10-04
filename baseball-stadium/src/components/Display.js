import React from 'react';

const Display = ({ strikes, balls, foul }) => {
  return (
    <div className='display'>
      <h2>Strikes: {strikes}</h2>
      <h2>balls: {balls}</h2>
      <h2>foul: {foul}</h2>
    </div>
  )
}

export default Display;