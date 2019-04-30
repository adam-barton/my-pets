export function fetchPets() {

    return (dispatch) => {
        dispatch({ type: 'LOADING_PETS' });
        return fetch('/api/v1/pets')
        .then(response => response.json())
        .then(pets => { dispatch({ type: 'FETCH_PETS', payload: pets });
        })
    };
}
