import React, { useState, useEffect } from "react"
import { createUser, readUsers } from './utils/api';
import Home from "./home";
import "./App.css"
import Errors from "./errors";
import Accounts from "./accounts";


function App() {
  const [found, setFound ] = useState(null);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect (() => {
      const abortController = new AbortController();
      readUsers(abortController.signal)
      .then(setUsers)
      .catch(setError);
      return () => abortController.abort();
  }, [])
  
  console.log(found);

  return (
      <>
      <Errors error = {error} />
      {found
      
      ?   <div >
              <Home />
          </div>
      :   <div>
            <Accounts users = {users} 
                      setFound = {setFound}
                      found = {found} /> 
          </div>}
      </>
  )
}

export default App;
