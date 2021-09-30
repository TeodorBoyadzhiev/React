import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as petService from '../../Services/petService'

const PetDetails = ({ match }) => {

    let [pet, setPet] = useState({});

    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(res => setPet(res));
    }, [match])

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <Link to="/"><button className="button"><i className="fas fa-heart"></i>
                Pet</button></Link>
            </p>
            <p className="img"><img alt="" src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div class="pet-info">
                <Link to={`/pets/edit/${match.params.petId}`}><button class="button">Edit</button></Link>
                <Link to="#"><button class="button">Delete</button></Link>
                <i class="fas fa-heart"></i> <span>5</span>
            </div>
        </section>
    )
}

export default PetDetails


