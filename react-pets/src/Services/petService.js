const url = 'http://localhost:5000/pets';

export const getAll = (category = '') => {
    let petsUrl = url + ((category && category !== 'all') ? `?category=${category}` : '');

    return fetch(petsUrl)
        .then(res => res.json())
        .then(pets => pets.map(x => ({ ...x, likes: Number(x.likes) })))
        .catch(err => console.log(err))
}


export const getOne = (petId) => {

    return fetch(`${url}/${petId}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const createPet = (petName, description, imageURL, category) => {
    const pet = {
        name: petName,
        description: description,
        imageURL: imageURL,
        category: category,
        likes: 0
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });
}


export const editPet = (petId, pet) => {

    return fetch(`${url}/${petId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    })
}

export const pet = (petId, likes) => {
    return fetch(`${url}/${petId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes })
    })
        .then(res => res.json());
}

export const deletePet = (petId) => {
    return fetch(`${url}/${petId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    })
}