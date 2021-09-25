import React, { Component } from 'react'
import Tutorial from './Tutorial'

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tutorials: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/tutorials')
            .then(res => res.json())
            .then(tutorials => {
                this.setState(() => ({ tutorials }))
            })
    }

    render() {
        return (
            <div>
                <h1>Content</h1>
                {this.state.tutorials.map((t) => 
                    <Tutorial
                        key={t.id}
                        title={t.title}
                        description={t.description}
                    />
                )}
            </div>
        )
    }
}

export default Content

