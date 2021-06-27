import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  
const [ {}, dispatch] = useStateValue();

    const signIn = () => {
      auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message))
    };

    return (
        <div className="login">
          <div className="login__container">
              <img src="https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png"
              alt=""
              />
              <div className="login__text">
                <h1>Sign In to whatsapp</h1>
              </div>

            <Button onClick={signIn} >
                Sign in with Google
            </Button>
           </div>
        </div>
    )
}

export default Login
