import './MovieCard.css'
import ReactStars from "react-stars";
import React from 'react';

const MovieCard =({movie})=>{

    return(
        <div className='movieblk'>
         <img src={movie.image} alt={movie.titre} className='moviepic' />
         <div className="row">
         
         {
            <ReactStars
              count={7}
              value={movie.rating}
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
          }
          </div>
         <h1>{movie.titre}</h1>
         <h3>Date: {movie.Since}</h3>
         <h5>{movie.genre}</h5>
         <button><link href={movie.video}/>Play</button>
        </div>
    )
}
export default MovieCard

// { id: 1, image:'/cukur.jpg', rating: 5, titre: "Cukur" ,Since:2017, genre:"Action,Drame,Policier,Turc", video