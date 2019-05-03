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
        return fetch('/api/v1/pets', data)
        .then(response => response.json())
        .then(pet => { dispatch({ type: 'ADD_PET', payload: pet });
        })
    };
}

export const deletePet = id => { 
    let data = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
      }
    return (dispatch) => {
        return fetch(`/api/v1/pets/${ id }`, data)
        .then(response => response.json())
        .then(pet => { dispatch({ type: 'DELETE_PET', payload: pet });
        })
    };
}

export const updatePet = pet => {
    let data = {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pet })
      }
    return (dispatch) => {
        return fetch(`/api/v1/pets/${ pet.id }`, data)
        .then(response => response.json())
        .then(pet => console.log("Updated pet: ", pet))
    };
}

// { dispatch({ type: 'UPDATE_PET', payload: pet });
//         }