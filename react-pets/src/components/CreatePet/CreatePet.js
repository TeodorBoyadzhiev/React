import React from 'react'
import * as petService from '../../Services/petService'

export default function CreatePet({history}) {

    const onSubmitCreateHandler = (e) => {
        e.preventDefault();
        
        const { name, description, imageURL, category } = e.target;

        petService.createPet(name.value, description.value, imageURL.value, category.value)
            .then(() => {
                history.push('/');
        })
    }
    return (
        <div>
            <section className="create">
                <form action="#" method="post" onSubmit={onSubmitCreateHandler}>
                    <fieldset>
                        <legend>Add new Pet</legend>
                        <p className="field">
                            <label htmlFor="name">Name</label>
                            <span className="input">
                                <input type="text" name="name" id="name" placeholder="Name" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input">
                                <textarea rows="4" cols="45" type="text" name="description" id="description"
                                    placeholder="Description"></textarea>
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image</label>
                            <span className="input">
                                <input type="text" name="imageURL" id="image" placeholder="Image" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="category">Category</label>
                            <span className="input">
                                <select type="text" name="category">
                                    <option value="Cat">Cat</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Parrot">Parrot</option>
                                    <option value="Reptile">Reptile</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span className="actions"></span>
                            </span>
                        </p>
                        <input className="button submit" type="submit" value="Add Pet" />
                    </fieldset>
                </form>
            </section>
            <style jsx>{`
            body {
	background: #FFF;
}

form {
	max-width: 30rem;
}

form,
form fieldset,
form legend,
form label,
form input,
form textarea,
form select {
	display: block;
}

form fieldset,
form legend {
	border: 1px solid #666;
	background: #F9F9F9;
	border-radius: 0.3rem;
	box-shadow: 0 0 1rem 0.1rem rgba(0, 0, 0, 0.1);
}

form fieldset {
	padding: 2.5em 2em 2em 2em;
	position: relative;
}

form legend {
	width: 30%;
	padding: 0.5rem 1rem;
	left: -1px;
	top: -1.4rem;
	position: absolute;
}

form label {
	font-weight: bold;
}

.field {}


.field .input {
	display: flex;
	position: relative;
	align-items: center;
}

.field .input:after {
	display: block;
	content: '';
}


.field .input input {
	border: none;
	flex: 1 1 auto;
	padding: 0.8rem;
	outline: none;
	background: transparent;
	z-index: 2;
	order: 2;
}

.field .input .fas {
	z-index: 2;
	position: relative;
	padding: 0 0 0 0.8rem;
	font-size: 0.9em;
	order: 1;
}

.field .input input+.actions {
	display: block;
	background: #FFF;
	border: 1px solid #CCC;
	border-radius: 0.3rem;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
}

.field .input input:focus+.actions {
	border-color: #090;
}

.field .input input:focus+.actions+.fas {
	color: #090;
}

form textarea {
	border-radius: 0.5rem;
	padding: 0.8rem;
}

form textarea:focus {
	outline: none;
	border-color: #090;
}

.description {
	width: 17rem;
	height: 10vh;
	padding: 2rem;
	overflow: auto;
}
                `}</style>
        </div>
    )
}
