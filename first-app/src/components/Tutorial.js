import React from 'react'

function Tutorial(props) {
    return (
        <article style={{ textAlign: "center" }}>
            <h3 style={{ color: "brown" }}>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    )
}

export default Tutorial
