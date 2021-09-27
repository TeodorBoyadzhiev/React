import React from 'react'
import { Component } from 'react'
import Pet from '../Pet/Pet'
import * as petService from '../../Services/petService'

import NavCategory from './NavCategory/NavCategory'

class Categories extends Component {

    constructor(props) {
        super(props)


        this.state = {
            pets: [],
            currentCategory: 'all'
        }
    }


    componentDidMount() {
        petService.getAll()
            .then(res => this.setState({ pets: res }))
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;
        
        if (prevProps.match.params.category === category) {
            return;
        }
        petService.getAll(category)
            .then(res => this.setState(() => ({ pets: res, currentCategory: category })))
    }

    render() {
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <NavCategory />

                <ul className="other-pets-list">

                    {this.state.pets.map(pet => <Pet
                        key={pet.id}
                        id={pet.id}
                        name={pet.name}
                        description={pet.description}
                        category={pet.category}
                        imageURL={pet.imageURL}
                        likes={pet.likes}
                    />
                    )}
                </ul>
            </section>
        )
    }
}


export default Categories