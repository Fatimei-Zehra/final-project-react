import React from 'react'
import Header from "../Header/Header"
import styles from "../Login/Login.module.css"
import mediaCss from "../Login/media.css"
import svg  from "../../Images/Login/login.jpg"




function Login() {
  return (
    <div>
         <Header/>
        <div className={styles.login}>
      <div className={styles.log}>
        <img src={svg} alt='Login' id='image' className={styles.logImg} /> 
      </div>

      <div className={styles.text} id='login-text-items'>
        <h1 id='login-items-text' className={styles.textH1}>Log in to Exclusive</h1>
        <p id='login-p' className={styles.textP}>Enter your details below</p>
        <input id='login-input' placeholder='Email or Phone Number' className={styles.textInput}></input>
        <input id='login-input' placeholder='Password' type='password' className={styles.textInput}></input>
        <div className={styles.forget}>
        <button id='login-btn' className={styles.forgetButton}>Log in</button> 
        <p className={styles.forgetP} id='forget-pass'>Forget Password?</p>
        </div>
        </div>
    </div>
   
    </div>
  )
}

export default Login

