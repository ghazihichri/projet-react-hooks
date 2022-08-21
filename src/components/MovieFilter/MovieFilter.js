import React from 'react'
import { Form } from 'react-bootstrap'

import ReactStars from "react-stars";

const FilterByTitle = ({ titre, setTitre,setRatingSearch }) => {


    const handleChangeSearch = (e) => {
        setTitre(e.target.value)
    }
    
    return (
        <div>
            <Form.Control type="text"
                className="inputFilter"
                onChange={handleChangeSearch}
                value={titre}
                placeholder="Entrer le titre de film ..." 
            />
            <ReactStars
                count={7}
                size={24}
                color2={"#ffd700"}
                edit={true}
                onChange={(newRatingSearch) => setRatingSearch(newRatingSearch)}
           />
   
      
        </div>
    )
}

export default FilterByTitle
