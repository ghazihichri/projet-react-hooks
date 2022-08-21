import { useState } from "react";

import { Button, Modal, Form } from 'react-bootstrap'
// import movie9 from '../../Assets/movie9.jpg';

import'./MovieAdd.css'


const MovieAdd = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);

  const [newMovie, setNewMovie] = useState({ image: "", rating: "", titre: "", Since: "",  genre: "", video: "" ,});

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
  }

  const Movieadd = (newMovie) => {
    setMovies([newMovie, ...movies])
    handleClose()
    setNewMovie({   rating: "",image: "", titre: "",Since: "", genre: "", video: "" ,})
  }


  return (
    <>
      <Button variant="light" onClick={handleShow} className="addBtn"> <h4>
      <span> Add </span> Movie</h4>
      </Button>

      <Modal show={show} onHide={handleClose} className="newMovie">
        
          <Modal.Title className="ANM">Add New Movie</Modal.Title>
      
        <Modal.Body className="AddMovie">

            <Form.Control type="text"
            className="modalInput"
            name="image"
            value={newMovie.image}
            onChange={handleChange}
            placeholder="Enter Movie Image URL ..." />

            <Form.Control type="number"
            className="modalInput"
            name="rating"
            value={newMovie.rating}
            onChange={handleChange}
            placeholder="Rating ..." min="1" max="7" />
          
            <Form.Control type="text"
            className="modalInput"
            name="titre"
            value={newMovie.titre}
            onChange={handleChange}
            placeholder="Enter Movie Name ..." />

            <Form.Control type="number"
            className="modalInput"
            name="Since"
            value={newMovie.Since}
            onChange={handleChange}
            placeholder="Date ..."  />
          
                        
            <Form.Control type="text"
            className="modalInput"
            name="genre"
            value={newMovie.genre}
            onChange={handleChange}
            placeholder="Enter Movie Genre ..." />


            <Form.Control type="text"
            className="modalInput"
            name="video"
            value={newMovie.video}
            onChange={handleChange}
            placeholder="Enter Movie Video URL ..." />
            
            

        </Modal.Body>
        <br/>
        <br/>
        <Modal.Footer className="btnf">
          <Button variant="secondary" onClick={handleClose}  >
            Close
          </Button>
          <Button variant="primary" 
            onClick={() => Movieadd({ id: Math.random(), titre: newMovie.titre, rating: newMovie.rating,image:newMovie.image , genre:newMovie.genre , video: newMovie.video , Since:newMovie.Since})}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MovieAdd
