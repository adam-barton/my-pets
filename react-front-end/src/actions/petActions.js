const baseUrl = 'http://localhost:4001/api/v1/pets';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export function fetchPets() {
    
    let data = {
        method: 'GET',
        mode: 'no-cors'
        // headers: {
        //     'Accept': 'application/json',
        //     // 'Content-Type': 'application/json',
        //     'mode': 'no-cors',
        //     // 'access control': 'allow-origin' 
        // }
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING_PETS' });
        // debugger
        return fetch('http://localhost:3000/api/v1/pets', 
            {
           method: 'GET',
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            }
          })
        .then(response => response.json())
        .then(pets => { console.log(pets)
            // dispatch({ type: 'FETCH_PETS', payload: pets });
        })
    };
}
