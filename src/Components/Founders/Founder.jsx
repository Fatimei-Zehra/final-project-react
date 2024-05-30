import React from 'react'
import FounderCss from "../Founders/Founder.module.css"
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import founderFisrt from "../../Images/Founders/founder1.png"
import founderSecond from "../../Images/Founders/founder1.png"
import founderThird from "../../Images/Founders/founder1.png"


function Founder() {
    return (
        <div className={FounderCss.founders}>
            <div className="founders-items">
                <div className={FounderCss.foundersBg}>
                    <img src={founderFisrt} alt="" />
                </div>
                <div>
                    <h3 className={FounderCss.founderName}>Tom Cruise</h3>
                    <p className={FounderCss.founderProfessia}>Founder & Chairman</p>
                </div>
                <div className={FounderCss.socialLinks}>
                    <FiTwitter  />
                    <FaInstagram  />
                    <FaLinkedinIn />
                </div>
            </div>

            <div className="founders-items">
                <div  className={FounderCss.foundersBg}>
                    <img src={founderFisrt} alt="" />
                </div>
                <div>
                    <h3 className={FounderCss.founderName}>Tom Cruise</h3>
                    <p className={FounderCss.founderProfessia}>Founder & Chairman</p>
                </div>
                <div className={FounderCss.socialLinks}>
                    <FiTwitter  />
                    <FaInstagram  />
                    <FaLinkedinIn />
                </div>
            </div>


            <div className="founders-items">
                <div  className={FounderCss.foundersBg}>
                    <img src={founderFisrt} alt="" />
                </div>
                <div>
                    <h3 className={FounderCss.founderName}>Tom Cruise</h3>
                    <p className={FounderCss.founderProfessia}>Founder & Chairman</p>
                </div>
                <div className={FounderCss.socialLinks}>
                    <FiTwitter  />
                    <FaInstagram  />
                    <FaLinkedinIn className={FounderCss.founderInstagram} />
                </div>
            </div>
        </div>
    )
}

export default Founder