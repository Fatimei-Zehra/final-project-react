import React from 'react'

import Styles from '../Arrival/Arrival.module.css'
import mediacss from '../Arrival/Arrival.media.css'
import png from '../../Images/Arrival/img.png'
import png2 from '../../Images/Arrival/img2.jpg'
import png3 from '../../Images/Arrival/img3.png'
import png4 from '../../Images/Arrival/img4.png'

 function Arrival() {
  return (
         <div  id='container' className={Styles.container}>
            <div id='item14' className={Styles.item14}>
      <div id='itemLarge' className={Styles.itemLarge}>
        <img  id='img1' className={Styles.itemLargeImg} src={png} alt="PlayStation 5" />
        <div id='text'  className={Styles.text}>
          <h2 id='textH2' className={Styles.textH2}>PlayStation 5</h2>
          <p  id='textP' className={Styles.textP}>Black and White version of the PS5 <br></br> coming out on sale.</p>
          <h3 id='textH3' className={Styles.textH3}>Shop Now</h3>
        </div>
      </div>
      <div className={Styles.item24}>
      <div id='item2' className={Styles.item2}>
        <img id='img2' className={Styles.item2Img} src={png2} alt="Women's Collections" />
        <div id='text2' className={Styles.text2}>
          <h2 id='text2H2' className={Styles.text2H2}>Women's Collections</h2>
          <p id='text2P' className={Styles.test2P}>Featured women collections that <br></br> give you another vibe.</p>
          <h3 id='text2H3' className={Styles.text2H3}>Shop Now</h3>
        </div>
      </div>
      <div id='item34' className={Styles.item34}>
       <div id='item3' className={Styles.item3}> 
        <img id='img3' className={Styles.item3Img} src={png3} alt="Speakers" />
        <div  id='text3' className={Styles.text3}>
          <h2 id='text3H2' className={Styles.text3H2}>Speakers</h2>
          <p id='text3P' className={Styles.text3P}>Amazon wireless speakers</p>
          <h3 id='text3H3' className={Styles.text3H3}>Shop Now</h3>
        </div>
      </div>

      <div id='item4' className={Styles.item4}>
        <img id='img4' className={Styles.item4Img} src={png4} alt="Perfume" />
        <div id='text4' className={Styles.text4}>
          <h2 id='text4H2' className={Styles.text4H2}>Perfume</h2>
          <p id='text4P' className={Styles.text4P}>GUCCI INTENSE OUD EDP</p>
          <h3 id='text4H3' className={Styles.text4H3}>Shop Now</h3>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}


export default Arrival;