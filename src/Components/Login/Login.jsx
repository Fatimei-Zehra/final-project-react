import React from 'react'
import styles from "../Login/Login.module.css"
import svg  from "../../Images/Login/login.jpg"




function Login() {
  return (
    <div>
        <div className={styles.login}>
      <div className={styles.log}>
        <img src={svg} alt='Login' /> 
      </div>

      <div className={styles.text}>
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <input placeholder='Email or Phone Number'></input>
        <input placeholder='Password' type='password'></input>
        <div className={styles.forget}>
        <button>Log in</button> 
        <p className={styles.Password}>Forget Password?</p>
        </div>
        </div>
    </div>
   
    </div>
  )
}

export default Login

