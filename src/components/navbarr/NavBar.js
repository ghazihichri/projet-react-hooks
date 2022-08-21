import './NavBar.css'

import FilterByTitle from '../MovieFilter/MovieFilter'
import NavLink from 'react-bootstrap/esm/NavLink'
import MovieAdd from '../MovieAdd/MovieAdd'
const NavBar =({titre,setTitre,setRatingSearch,ratingSearch,movies,setMovies})=>{
 
  return (
    <div className="navbar">
       <div className="titre">
        <img src="/logo.jpg" alt="Logo" />
        <h2>PlayMovies</h2>
       </div>
       <div className="contenu">
        <NavLink  >Acceuil</NavLink>
        <MovieAdd movies={movies} setMovies={setMovies}  > <span> Add </span> Film </MovieAdd>
        {/* <Addmovie movies={movies} setMovies={setMovies}  > <span> Add </span> Film </Addmovie> */}
        <form >
        <FilterByTitle titre={titre} setTitre={setTitre} ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} />
        
        </form>
       </div>

    
    
    </div>
  )
}
export default NavBar