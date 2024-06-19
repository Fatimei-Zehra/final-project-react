import React from 'react'
import AboutCss from "./About.module.css"
import imgAbout from "../../Images/About/Side Image.png"
import { Link } from "react-router-dom";
import GlobalCss from "../GlobalCss/global.css"
import Statistics from '../Statistics/Statistics';
import Founder from '../Founders/Founder';
import Services from '../Services/Services';


function About() {
  return (
    <div>
      <div className="container">
        <div className={AboutCss.pageLink} id='page-link'>
          <Link to='/Home' className={AboutCss.homePage} id='homePage'>Home /</Link>
          <p className={AboutCss.aboutPage} id='aboutPage'>About</p>
        </div>
      </div>
      <div className={AboutCss.aboutItems} id='about-items'>
        <div className={AboutCss.aboutStory} id='about-story'>
          <h3 className={AboutCss.ourStory} id='our-story'>Our Story</h3>
          <p className={AboutCss.storyText} id='story-text'>Launced in 2015, Exclusive is South Asia's premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br />by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br />millioons customers across the region. </p>
          <p className={AboutCss.storySecondText} id='story-second-text'>
            Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories  <br />ranging  from consumer.
          </p>


        </div>

        <div className={AboutCss.image} id='image-about'>
          <img src={imgAbout} alt="" className={AboutCss.imageAbout} />
        </div>
      </div>

      <div className="container">
        <Statistics />
        <Founder />
      </div>
      <Services/>
    </div>
  )
}

export default About