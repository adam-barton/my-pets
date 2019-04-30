const baseUrl = 'http://localhost:4001/api/v1/pets';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export function fetchPets() {
    
    let data = {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            'mode': 'no-cors',
            // 'access control': 'allow-origin' 
        }
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING_PETS' });
        return fetch('/api/v1/pets')
        .then(response => response.json())
        .then(pets => { console.log(pets)
            // dispatch({ type: 'FETCH_PETS', payload: pets });
        })
    };
}
