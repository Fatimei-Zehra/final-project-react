import React from 'react'
import AboutCss from "./About.module.css"
import imgAbout from "../../Images/About/Side Image.png"

function About() {
  return (
    <div>
     
        <div className={AboutCss.pageLink}>
          <p>Home</p>
          <span className={AboutCss.line}>/</span>
          <p>About</p>
        </div>
        <div className={AboutCss.aboutItems}>
          <div>
            <h3 className={AboutCss.ourStory}>Our Story</h3>
            <p className={AboutCss.storyText}>Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
            </p>


          </div>

          <div>
            <img src={imgAbout} alt="" />
          </div>
        </div>
      
    </div>
  )
}

export default About