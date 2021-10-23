
import { useState } from "react"

import LoginCard from "./LoginCard"
import MainContent from "./MainContent"
import Header from "./Header"

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  // when the login form is submitted, a fetch is sent to get the 
  //  user list from the db to see if such a user exists
  
  // if one is found, the state is changed for both the current user
  //  and loggedIn
  function handleLogin(e, formData) {
    e.preventDefault()
    console.log('handle log in')
    fetch('http://localhost:6001/users')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const loginAttempt = (checkForUser(data, formData))
        if(loginAttempt !== null) {
          setCurrentUser(loginAttempt)
          setLoggedIn(!loggedIn)
        }
      })
      .catch((error) => {
        console.error("An Error Appeared!", error)
        alert("An error has occured with the servers, please try again later.")
      })
  }

  // when the user wants to log out, the state for the current user
  //  and loggedIn are both changed to prepare the application for the next user
  function handleLogout() {
    setLoggedIn(false)
    setCurrentUser({})
  }

  // checks fetched list of users from the db against the input provided 
  // by the login form:
  //   returns either null if no account exists, or returns the account if found
  function checkForUser(userData, formData) {
    for(let i=0; i<userData.length; i++){
      if(userData[i].username === formData.username && userData[i].password === formData.password) {
        return userData[i]
      }       
    }
    alert('Username or password was incorrect.')
    return null
  }

  return (
    <div className="App">
      <Header />
      {loggedIn ? <MainContent currentUser={currentUser} onLogout={handleLogout}/> : 
        <LoginCard onLogin={handleLogin}/>}
    </div>
  );
}

export default App;
