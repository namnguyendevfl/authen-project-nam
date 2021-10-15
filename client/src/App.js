import React, { useState, useEffect } from "react"
import { createUser, readUsers } from './utils/api';


function App() {
  const [name, setName] = useState([])
  const [errors, setErrors] = useState(null);
  

  // useEffect(() => {
  //   fetch('https://name-generator-backend-nam.herokuapp.com/accounts')
  //     .then((res) => res.json())
  //     .then((nme) => setName([nme]))
  // }, [])

  useEffect(() => {

    readUsers()
    .then(setName)
    .catch(setErrors);
  }, [])

  console.log(name)

  const newUser = {
    user_id: 3, 
    name: 'nam', 
  };

  const handlePost = () => {
    createUser(newUser);
  }
  return (
    <div className="App">
      <button onClick = {handlePost}>
        post
      </button>
    </div>
  );
}

export default App;
