
import React from 'react'

const Movies = ({ movieItems }) => {
    

  return (
    <div className="movies">
      {movieItems.map((movieItem) => (
        
        <div className="card" > 
          <div>
            <img
              className="movie-image"
              src={movieItem.image}
              alt={movieItem.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
};



export default Movies