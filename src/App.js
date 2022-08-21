
import { useState } from 'react';
import './App.css';
import MovieListe from './components/MovieListe/MovieListe ';
import MoviesData from './components/MoviesData/MoviesData';
import NavBar from './components/navbarr/NavBar';

import React from 'react';

function App() {
  const [movies,setMovies]=useState(MoviesData)
  const [titre, setTitre] = useState("");
  const [ratingSearch, setRatingSearch] = useState("2");
 
  return (
  <>
    <NavBar titre={titre} setTitre={setTitre} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} movies={movies} setMovies={setMovies}/>
    <MovieListe movies={movies} titre={titre} setTitre={setTitre} ratingSearch={ratingSearch} />
  </>
  );
}

export default App;
