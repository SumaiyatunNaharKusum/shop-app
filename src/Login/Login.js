import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase'
import './Login.css'

import { useHistory, useLocation } from 'react-router';
export const Login = () => {
  const history = useHistory();
  const location=useLocation().location?.pathname
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(res => {
      const {displayName, email, photoURL} = res.user;
      localStorage.setItem('email',email)
      localStorage.setItem('name',displayName)
      localStorage.setItem('pic',photoURL)
      history.replace("/"|| location)

    })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const handleGithubSignIn = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(res => {
      const {displayName, email, photoURL} = res.user;
      localStorage.setItem('email',email)
      localStorage.setItem('name',displayName)
      localStorage.setItem('pic',photoURL)
      history.replace("/"|| location)
   

    })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
 

  const [user, setUser] = useState({
    name: '',
    email: '',
    password:'',
    photo: ''
  })
  console.log(user)
  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length;
      const passwordHasNumber =  e.target.value;
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
      firebase.auth().signInWithEmailAndPassword(user.email,user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        console.log('sign in user info', res.user);
        localStorage.setItem('email',user.email)
      })
      .catch(function(error) {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        history.replace("/login");
      });
    

    e.preventDefault();
  }
 
 

  return (
   <section>
   
  <div className="container login-container">
 <div className="row">
   <div className="col-md-12 login-form-1">
     <h3>LOG IN NOW</h3>
     {user.error?<h4 style={{color:"red"}}>{user.error}</h4>:null}
     <form onSubmit={handleSubmit}>
       <div className="form-group">
         <input type="text" className="form-control" placeholder="Your Email *"   name="email" onBlur={handleBlur}/>
       </div>
       <div className="form-group">
         <input type="password" className="form-control" placeholder="Your Password *" name="password" onBlur={handleBlur} />
       </div>
       <div className="form-group">
         <input type="submit" className="btnSubmit" value="Login" />
       </div>
       <div className="form-group">
         <a href="#" className="ForgetPwd">Forget Password?</a>
       </div>
       <div className="form-group">
         <a href="/signup" class="ForgetPwd">SIGNUP</a>
       </div>
       
     </form>
     
   </div>
   <button onClick={handleGithubSignIn} className="btn btn-dark mb-2">Login With Github</button>
   <button onClick={handleGoogleSignIn} className="btn btn-success">Login With Google</button>
   
 </div>

</div>
   </section>
  )
}
