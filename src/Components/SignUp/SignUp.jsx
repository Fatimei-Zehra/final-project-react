import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from "../SignUp/SignUp.module.css";
import svg from "../../Images/Login/login.jpg";
import { FcGoogle } from 'react-icons/fc';
import '../SignUp/SignUp.media.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../SignUp/firebase.js';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password, error);
      navigate('/home');
      console.log('Kayıt başarılı');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.Account}>
      <div className={styles.acc}>
        <img src={svg} alt='Login' id='image' className={styles.accImg} />
      </div>

      <div className={styles.text} id='account-text-items'>
        <h1 id='account-items-text' className={styles.textH1}>Create an account</h1>
        <p id='account-p' className={styles.textP}>Enter your details below</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='account-input'
          placeholder='Name'
          className={styles.textInput}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='account-input'
          placeholder='Email or Phone Number'
          className={styles.textInput}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id='account-input'
          placeholder='Password'
          type='password'
          className={styles.textInput}
        />
        <div className={styles.forget}>
          <button onClick={handleSignUp} id='account-btn' className={styles.AccountButton}>
            Create Account
          </button>
          <button id='Google-btn' className={styles.GoogleButton}>
            <FcGoogle className={styles.icon} /> Sign up with Google
          </button>
          <div className={styles.P}>
            <p className={styles.forgetP} id='forget-pass'>Already have account?</p>
            <Link to="/Login" className={styles.AccountP}>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;