import React from 'react'
import AboutCss from "./About.module.css"
import imgAbout from "../../Images/About/Side Image.png"
import { Link } from "react-router-dom";
import GlobalCss from "../GlobalCss/global.css"
import Statistics from '../Statistics/Statistics';


function About() {
  return (
    <div>
      <div className="container">
        <div className={AboutCss.pageLink}>
          <Link to='/Home' className={AboutCss.homePage}>Home /</Link>
          <p className={AboutCss.aboutPage}>About</p>
        </div>
      </div>
      <div className={AboutCss.aboutItems}>
        <div className={AboutCss.aboutStory}>
          <h3 className={AboutCss.ourStory}>Our Story</h3>
          <p className={AboutCss.storyText}>Launced in 2015, Exclusive is South Asia's premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br />by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br />millioons customers across the region. </p>
          <p className={AboutCss.storySecondText}>
            Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories  <br />ranging  from consumer.
          </p>


        </div>

        <div>
          <img src={imgAbout} alt="" />
        </div>
      </div>

      <div className="container">
        <Statistics/>
      </div>

    </div>
  )
}

export default About