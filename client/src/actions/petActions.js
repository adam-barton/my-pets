export const fetchPets = () => {

    return (dispatch) => {
        dispatch({ type: 'LOADING_PETS' });
        return fetch('/api/v1/pets')
        .then(response => response.json())
        .then(pets => { dispatch({ type: 'FETCH_PETS', payload: pets });
        })
    };
}


export const addPet = pet => {
    let data = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pet })
      }
    return (dispatch) => {
        console.log('/api/v1/pets', data)
        return fetch('/api/v1/pets', data)
        .then(response => response.json())
        .then(pet => { dispatch({ type: 'ADD_PET', payload: pet });
        })
    };
}
