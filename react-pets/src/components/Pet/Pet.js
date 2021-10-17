import {useState} from 'react'
import { Link } from 'react-router-dom'

import * as petService from '../../Services/petService'

export default function Pet({
    name,
    category,
    imageURL,
    description,
    id,
    likes
}) {
    const [currentLikes, setCurrentLikes] = useState(likes);

    const onClickPetHandler = () => {

        petService.pet(id, likes + 1)
            .then((result) => {
                setCurrentLikes(result.likes);
            });

    }

    return (
        <li className="otherPet">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p className="img"><img alt="" src={imageURL} /></p>
            <p className="description">{description}</p>
            <div className="pet-info">
                <i className="fas fa-heart"></i> <span>{currentLikes}</span>
                <button className="button" onClick={onClickPetHandler}><i className="fas fa-heart"></i> Pet</button><br />
                <Link to={`/pets/details/${id}`}><button className="button">Details</button></Link>
            </div>
            <style jsx>
                {`
                .otherPet {
                    max-width:30%;
                }
                `}
            </style>
        </li>
    )
}
