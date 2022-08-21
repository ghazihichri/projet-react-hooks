import React from 'react'
import MovieCard from '../MovieCrad/MovieCard'
import './MovieListe.css'



const MovieList = ({ movies,titre,ratingSearch,rating}) => {

  return (
    <div className='movieList'  >
      {
        movies
          // .filter(movie => movie.titre.toUpperCase().includes(titre.toUpperCase())
          // &&
          //   movie.rating >= ratingSearch
          // )
          
          .filter(
            (movie) =>
            movie.titre.toLowerCase().includes(titre.toLowerCase().trim()) 
            &&
            movie.rating >= ratingSearch
          )
          .map(movie =>
            <MovieCard movie={movie} key={movie.id} />
           
          )
      }
    </div>
  )
}

export default MovieList