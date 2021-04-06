import React, { useState } from 'react'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase'
import { useHistory, useLocation } from 'react-router';


export const CreateAcc = () => {
  const history = useHistory();
  const location=useLocation().location?.pathname
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
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
      firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
      .then( res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        setUser(newUserInfo);
        alert('Account Create Success')
        history.replace("/login")
      })
      .catch( error => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
      e.preventDefault();
  }
  return (
   <section>
   
      <div className="container login-container">
      <div className="row">
        <div className="col-md-12 login-form-1">
          <h3>Create a account</h3>
          {user.error?<h4 style={{color:"red"}}>{user.error}</h4>:null}
          <form  onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your name *" name="name" onBlur={handleBlur} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Enter email *" name="email"  onBlur={handleBlur} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password *" name="password" onBlur={handleBlur} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Confirm Password *" name="Confirmpassword" onBlur={handleBlur}/>
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="SignUp" />
            </div>
          </form>
        </div>
      </div>
    </div>
   </section>
  )
}
