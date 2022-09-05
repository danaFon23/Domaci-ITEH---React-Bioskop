
import React from 'react'

const Movies = ({ movieItems, handleAddMovie }) => {
    

  return (
    <div className="movies">
      {movieItems.map((movieItem ) => (
        <div className="card">
          <div>
            <h3 className="movie-title">{movieItem.title}</h3>
            <img
              className="movie-image"
              src={movieItem.image}
              alt={movieItem.title}
            />
          </div>

          <div>
            <h3 className="movie-genre">Genre:{movieItem.genre}</h3>
          </div>
          <div className="movie-price">RSD {movieItem.price}</div>
          <div>
            <button
              className="movie-add-button"
              onClick={()=>handleAddMovie(movieItem)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};



export default Movies