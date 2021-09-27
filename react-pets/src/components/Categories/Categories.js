import React from 'react'
import { Component } from 'react'
import Pet from '../Pet/Pet'

import NavCategory from './NavCategory/NavCategory'

class Categories extends Component {

    constructor(props) {
        super(props)


        this.state = {
            pets: []
        }
    }


    componentDidMount() {
        fetch('http://localhost:5000/pets')
            .then(res => res.json())
            .then(res => this.setState({ pets: res }))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <NavCategory />

                <ul className="other-pets-list">
                    
                    {this.state.pets.map(pet => <Pet
                        key={pet.id}
                        name={pet.name}
                        description={pet.description}
                        category={pet.category}
                        imageURL={pet.imageURL}
                        likes={pet.likes}
                    />)}
                </ul>
            </section>
        )
    }
}


export default Categories