import React from 'react'
import styles from '../Error/Error.module.css'
import { Link } from "react-router-dom"
import ErrorMediaCss from '../Error/Error.media.css'

 const Error = () => {
  return (

    <div className="container">
    <div className={styles.pageLink}>
        <Link to='/Home' className={styles.homePage}>Home /</Link>
        <p className={styles.errorPage}>404 Error</p>
    </div>

    <div className={styles.Error} id='error'>
      <h1 className={styles.ErrorH1} id='error-h1'>404 Not Found</h1>
      <p className={styles.ErrorP} id='error-p'>Your visited page not found. You may go home page.</p>
      <button onClick={() => window.location.href = '/'} className={styles.Errorbtn} id='error-btn'>Back to home page</button>
    </div>
    </div>
  )
}


export default Error;