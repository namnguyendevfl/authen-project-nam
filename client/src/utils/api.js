// const API_BASE_URL = process.env.API_BASE_URL || "https://name-generator-backend-nam.herokuapp.com"
const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:4000";


const headers = new Headers();
headers.append("Content-Type", "application/json");
//Get logedInUder and deckId from localStorage
    // let logedInUser = window.localStorage.getItem('login');
    // logedInUser = JSON.parse(logedInUser);
    let deckId = window.localStorage.getItem('deckId');
    deckId = JSON.parse(deckId);
    let userId = window.localStorage.getItem('userId');
    userId = JSON.parse(userId);

//Create a function to fetch and then parseJSON 
async function fetchJson(url, options) {
    try {
        const response = await fetch(url, options);
        console.log(response);
        if (response.status === 204) return null;

        const payload = await response.json();
        console.log(payload)
        if (payload.error) return Promise.reject({message: payload.error});

        return payload.data
    } catch(error) {
        if (error.name !== "AbortError") {
            console.log(error.stack);
            return Promise.reject({message: error.message})
        }
    }
}

//CRUDs for user
    export async function createUser(user, signal){
        const url = `${API_BASE_URL}`;
        const create = {
            method: "POST",
            headers,
            signal,
            body: JSON.stringify({data:user})
        };
        return await fetchJson(url,create);
    }

    export async function readUsers(signal) {
        const url = `${API_BASE_URL}`;
        const read = {
            headers,
            signal
        }
        return await fetchJson(url,read);
    }

//CRUD for decks

    export async function createDeck(deck, userId, signal) {  
        // if(logedInUser.length !== 0) {
        //     // const userId = logedInUser[0].user_id;
            const url = `${API_BASE_URL}/flashcards/${userId}`;
            const create = {
                method: "POST",
                headers,
                signal,
                body: JSON.stringify({data:deck})
            };
            return await fetchJson(url,create);
        
    }

    export async function readDecks(signal, userId) {
        // if(logedInUser.length !== 0) {
        //     // const userId = logedInUser[0].user_id;
            const url = `${API_BASE_URL}/flashcards/${userId}`;
            const read = {
                headers,
                signal
            }
            return await fetchJson(url,read);
        // }
    }


//CRUD for cards
    export async function createCard(deck, signal) {
        // if(logedInUser.length !== 0) {
        //     // const userId = logedInUser[0].user_id;
            const url = `${API_BASE_URL}/flashcards/${userId}/decks/${deckId}`;
            console.log(url);
            const create = {
                method: "POST",
                headers,
                signal,
                body: JSON.stringify({data:deck})
            };
            return await fetchJson(url,create);
        // }
    }

    export async function readCards(signal, deckId) {
            const url = `${API_BASE_URL}/flashcards/${userId}/decks/${deckId}`;
           
            const read = {
                headers,
                signal
            }
            return await fetchJson(url,read);
       
    }


//CRUD for books
export async function createBook(book, signal) {
    // if(logedInUser.length !== 0) {
    //     // const userId = logedInUser[0].user_id;
        const url = `${API_BASE_URL}/notebooks`;
        console.log(url);
        const create = {
            method: "POST",
            headers,
            signal,
            body: JSON.stringify({data:book})
        };
        return await fetchJson(url,create);
    // }
}

export async function readBooks(signal, deckId) {
        const url = `${API_BASE_URL}/notebooks`;
        const read = {
            headers,
            signal
        }
        return await fetchJson(url,read);
   
}



//Create chapters

const chapters = [];


