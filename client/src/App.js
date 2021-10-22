import React, { useState, useEffect } from "react"
import { readUsers } from './utils/api';
import Home from "./home";
import "./App.css"
import Errors from "./errors";
import Accounts from "./accounts";

function App() {
  let userId = null;
  //Test windoeStorage
    let deckId = window.localStorage.getItem('deckId');
    deckId = JSON.parse(deckId);
    userId = window.localStorage.getItem('userId');
    userId = JSON.parse(userId);
    let matchUser = window.localStorage.getItem('login');
    matchUser = JSON.parse(matchUser);


  const [found, setFound ] = useState(null);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const [error, setError] = useState(null);
  const initialUser = {
    userName: "",
    password: "",
};

const [userLogedIn, setUserLogedIn] = useState(matchUser?matchUser[0]:initialUser);
// const [userLogedIn, setUserLogedIn] = useState(initialUser);
  useEffect (() => {
      const abortController = new AbortController();
      readUsers(abortController.signal)
      .then(setUsers)
      .catch(setError);
      return () => abortController.abort();
  }, [count]);

  return (
      <>
      <Errors error = {error} />
      {userId || found
      ?   <div >
              <Home 
              userLogedIn = {userLogedIn}
              setFound = {setFound}
              setUserLogedIn = {setUserLogedIn}
              />
          </div>
      :   <div>
            <Accounts users = {users} 
                      setFound = {setFound}
                      found = {found} 
                      userLogedIn = {userLogedIn}
                      setUserLogedIn = {setUserLogedIn}
                      count = {count}
                      setCount = {setCount}
                      /> 
          </div>}
      </>
  )
}

export default App;
