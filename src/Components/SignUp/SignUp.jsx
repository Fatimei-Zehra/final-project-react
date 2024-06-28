import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "../SignUp/SignUp.module.css"
import svg from "../../Images/Login/login.jpg"
import { FcGoogle } from 'react-icons/fc'
import SignUpMediacss from '../SignUp/SignUp.media.css'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase.js'
import { Link } from 'react-router-dom'





const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [inputErrors, setInputErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (validateInputs()) {
      try {
        createUserWithEmailAndPassword(auth, email, password, name);
        navigate('/login');
        console.log('Qeydiyyat olundu');

      } catch (error) {
        console.log(error);
      }
    };
  }


  const validateInputs = () => {
    const errors = {
      name: name.trim() === '',
      email: !email || email.trim() === '' || !/\S+@\S+\.\S+/.test(email),
      password: password.trim() === '' || password.length < 6,
    };
    setInputErrors(errors);
    return !errors.name && !errors.email && !errors.password;
  };



  return (
    <div>
      <div id='account' className={styles.Account}>
        <div className={styles.Account}>
          <div className={styles.acc}>
            <img src={svg} alt='Login' id='image' className={styles.accImg} />
          </div>
          <div className={styles.text} id='account-text-items'>
            <h1 id='account-items-text' className={styles.textH1}>Create an account</h1>
            <p id='account-p' className={styles.textP}>Enter your details below</p>
            <input value={name} onChange={(e) => setName(e.target.value)} id='account-input' placeholder='Name' className={`${styles.textInput} ${inputErrors.name ? styles.error : ''}`}></input>
            <input value={email} onChange={(e) => setEmail(e.target.value)} id='account-input' placeholder='Email or Phone Number' className={`${styles.textInput} ${inputErrors.email ? styles.error : ''}`}></input>
            <input value={password} onChange={(e) => setPassword(e.target.value)} id='account-input' placeholder='Password' type='password' className={`${styles.textInput} ${inputErrors.password ? styles.error : ''}`}></input>
            <div className={styles.forget}>
              <button onClick={handleSignUp} id='account-btn' className={styles.AccountButton}>Create Account</button>
              <button id='Google-btn' className={styles.GoogleButton}> <FcGoogle className={styles.icon} />Sign up with Google</button>
              <div id='p' className={styles.P}>
                <p className={styles.forgetP} id='forget-pass'>Already have account?</p>
                {/*  id='acc-p'></p> */}
                <Link to="/Login" className={styles.AccountP}>
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;