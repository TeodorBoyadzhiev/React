import { useState } from 'react'
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
                <div className="likes"> <i className="fas fa-heart"></i> <span>{currentLikes}</span> </div>
                <div className="buttons"> <button className="button" onClick={onClickPetHandler}><i className="fas fa-heart"></i> Pet</button>
                    <Link to={`/pets/details/${id}`}><button className="button">Details</button></Link>
                </div>
            </div>
            <style jsx>
                {`
                .otherPet {
                    max-width:30%;
                    width:30%;
                    box-sizing:border-box;
                    box-shadow: 1px 1px 11px -2px black;
                    border-radius:5px;
                    display:flex;
                    justify-content:space-between;
                    margin: 20px;

                }

                .pet-info {
                    display:flex;
                    flex-direction:row;
                    width:100%;
                    justify-content:space-between;
                }

                .description {
                    align-self:center;
                    padding:15px;
                }

                .img > img{
                    height:14em;
                    border:none;
                    box-shadow: 1px 1px 11px -2px black;

                }

                .button {
                    margin:5px;
                }

                .buttons {
                    display:flex;
                    margin-right:20px;
                    align-self: flex-end;
                }

                .likes{
                    margin-left:20px;
                    align-self:flex-end;
                }
                `}
            </style>
        </li>
    )
}
