import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as petService from '../../Services/petService'

const PetDetails = ({ match, history }) => {

    let [pet, setPet] = useState({});

    useEffect(() => {
        petService.getOne(match.params.petId)
            .then(res => setPet(res));
    }, [match])

    const onClickPetHandler = () => {
        let incrementedLikes = pet.likes + 1;

        petService.pet(match.params.petId, incrementedLikes)
            .then(() => {
                setPet(state => ({ ...state, likes: incrementedLikes }))
            })
    }

    const onClickDeleteHandler = () => {
        petService.deletePet(match.params.petId)
            .then(() => {
                history.push('/categories/all')
            })
    }

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}

                <button className="button" onClick={onClickPetHandler}><i className="fas fa-heart"></i>Pet</button>

            </p>
            <p className="img"><img alt="" src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                <Link to={`/pets/edit/${match.params.petId}`}><button className="button">Edit</button></Link>
                <Link to="#" onClick={onClickDeleteHandler}><button className="button">Delete</button></Link>
            </div>
            <style jsx>
                {`
                .img > img{
                    height:14em;
                    border-radius:40px 0px 40px 0px;
                }

                .button {
                    margin:10px;
                }

                `}
            </style>
        </section>
    )
}

export default PetDetails


