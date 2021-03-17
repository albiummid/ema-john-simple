import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';



function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
console.log(loggedInUser);
  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }



  return (
    <div style={{textAlign: 'center',margin:"50px"}}>
        {
          newUser && user.isSignedIn ? <button onClick={signOut}>Sign Out with Google</button> : <button onClick={googleSignIn}>Sign In with Google</button>
        }
      <br />
      <br/>
      <button onClick={fbSignIn}>Sign in using Facebook</button>
      {
        user.isSignedIn &&
        <div>
        <img src={user.photo} alt=" "/>
        <p>Welecome, {user.name}</p>
        <p>Your email: {user.email}</p>
      </div>
      }

      <h1>Our own Authentication</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">New User {newUser? "Sign Up" : "Sign In"}</label>
      <form onSubmit={handleSubmit}>
        {newUser && <input name="name" type="text" onChange={handleBlur} placeholder="Your name"/>}
        <br />
        <br/>
        <input type="text" name="email" onChange={handleBlur} placeholder="Your Email address" required/>
        <br />
        <br/>
        <input type="password" name="password" onChange={handleBlur} placeholder="Your Password" required/>
        <br />
        <br/>
        <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
      </form>
      <p style={{color: 'red'}}>{user.error}</p>
      { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully 😍</p>}
    </div>
  );
}

export default Login;
