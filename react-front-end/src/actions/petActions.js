const baseUrl = 'http://localhost:4001/api/v1'

export function fetchPets() {
    
    let data = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'mode': 'cors'
        }
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING_PETS' });
        
        return fetch(`${ baseUrl }/pets`, data)
        .then(response => response.json())
        .then(pets => { console.log(pets)
            // dispatch({ type: 'FETCH_PETS', payload: pets });
        })
    };
}
