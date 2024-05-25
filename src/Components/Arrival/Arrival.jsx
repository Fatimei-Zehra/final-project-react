import React from 'react'
import styles from "../Arrival/Arrival.module.css"
import png  from "../../Images/Arrival/img.png"
//import png2  from "../../Images/Arrival/img2.png"
import png3  from "../../Images/Arrival/img3.png"
import png4  from "../../Images/Arrival/img4.png"


function  Arrival() {
  return (
    <div className={styles.Arrival}> 
    <div className={styles.Img}>
      <img src={png} alt='img' id='image' className={styles.Img1} /> 
      </div>
      <div className={styles.Text}>
      <h1 className={styles.ImgH1}>PlayStation 5</h1>
      <p className={styles.Imgp}>Black and White version of the PS5 coming out on sale.</p>
      <p className={styles.ShopP}>Shop Now</p>
      </div>
    </div>
  )
} 

export default Arrival;