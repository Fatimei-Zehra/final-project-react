import React from 'react'
import styles from "../SignUp/SignUp.module.css"
import svg  from "../../Images/Login/login.jpg"
import { FcGoogle } from 'react-icons/fc'
import SignUpMediacss from '../SignUp/SignUp.media.css'





function SignUp() {
  return (
    <div>
        <div className={styles.Account}>
      <div className={styles.acc}>
        <img src={svg} alt='Login' id='image' className={styles.accImg} /> 
      </div>

      <div className={styles.text} id='account-text-items'>
        <h1 id='account-items-text' className={styles.textH1}>Create an account</h1>
        <p id='account-p' className={styles.textP}>Enter your details below</p>
        <input id='account-input' placeholder='Name' className={styles.textInput}></input>
        <input id='account-input' placeholder='Email or Phone Number' className={styles.textInput}></input>
        <input id='account-input' placeholder='Password' type='password' className={styles.textInput}></input>
        <div className={styles.forget}>
        <button id='account-btn' className={styles.AccountButton}>Create Account</button> 
        <button id='Google-btn' className={styles.GoogleButton}> <FcGoogle className={styles.icon}/> Sign up with Google</button> 
        <div className={styles.P}>
        <p className={styles.forgetP} id='forget-pass'>Already have account?</p>
        <p className={styles.AccountP} id='acc-p'>Log in</p>
        </div> 
        </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp;