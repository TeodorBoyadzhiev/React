import React from 'react'
import { Link } from 'react-router-dom'

export default function Pet({
    name,
    category,
    imageURL,
    description,
    id,
    likes,
    onClickPetHandler
}) {

    return (
        <li className="otherPet">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p className="img"><img alt="" src={imageURL} /></p>
            <p className="description">{description}</p>
            <div className="pet-info">
                <button className="button" onClick={onClickPetHandler}><i className="fas fa-heart"></i> Pet</button>
                <Link to={`/pets/details/${id}`}><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i> <span>{likes}</span>
            </div>
        </li>
    )
}
