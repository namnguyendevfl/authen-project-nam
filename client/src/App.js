import React, { useState, useEffect } from "react"
import { createUser, readUsers } from './utils/api';
import Home from "./home";
import "./App.css"
import Errors from "./errors";
import Accounts from "./accounts";
import { LogedInUser } from "./accounts/login";
// import UserLogedIn from "./accounts/login/UserLogedIn";


function App() {
  // const a = UserLogedIn();
  // console.log(a);

  let matchUser = window.localStorage.getItem('login');
  matchUser = JSON.parse(matchUser);
  // console.log(matchUser[0]);
  // // console.log(LogedInUser());
  const [found, setFound ] = useState(null);
  const [users, setUsers] = useState([]);
  // const [user, setUser] = useState();
  const [error, setError] = useState(null);
  

  const initialUser = {
    userName: "",
    password: "",
}

const [userLogedIn, setUserLogedIn] = useState(matchUser?matchUser[0]:initialUser);
  useEffect (() => {
      const abortController = new AbortController();
      readUsers(abortController.signal)
      .then(setUsers)
      .catch(setError);
      return () => abortController.abort();
  }, [])

//   useEffect (() => {
//     const abortController = new AbortController();
//     readUser(abortController.signal, userLogedIn.user_id)
//     .then(setUser)
//     .catch(setError);
//     return () => abortController.abort();
// }, [])
  
  console.log(userLogedIn);
  // console.log(users)
  // // console.log(userURL());

  return (
      <>
      <Errors error = {error} />
      {matchUser || found
      ?   <div >
              <Home 
              userLogedIn = {userLogedIn}
              setFound = {setFound}
              />
          </div>
      :   <div>
            <Accounts users = {users} 
                      setFound = {setFound}
                      found = {found} 
                      userLogedIn = {userLogedIn}
                      setUserLogedIn = {setUserLogedIn}
                      /> 
          </div>}
      </>
  )
}

export default App;
