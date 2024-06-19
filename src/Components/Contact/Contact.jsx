import React from 'react'
import ContactCss from "./Contact.module.css"
import { Link } from "react-router-dom"
import { LuPhone } from "react-icons/lu";


function Contact() {
    return (
        <div>
            <div className="container">
                <div className={ContactCss.pageLink}>
                    <Link to='/Home' className={ContactCss.homePage}>Home /</Link>
                    <p className={ContactCss.aboutPage}>Contact</p>
                </div>

                <div className={ContactCss.contact}>
                    <div className={ContactCss.contactInformation}>
                        <div className="contact-for-call">
                            <div className={ContactCss.callUs}>
                                <LuPhone className={ContactCss.phoneIcon} />
                                <p className={ContactCss.callUsText}>Call To Us</p>
                            </div>

                            <div>
                                <p className={ContactCss.availableTime}>We are available 24/7, 7 days a week.</p>
                                <p className={ContactCss.phoneNumber}>Phone: +8801611112222</p>
                            </div>
                        </div>

                        <div className={ContactCss.line}></div>

                        <div className='contact-from-writte'>
                            <div className={ContactCss.callUs}>
                                <LuPhone />
                                <p className={ContactCss.callUsText} >Write To Us</p>
                            </div>
                            <div>
                                <p className={ContactCss.writtingInfo}>Fill out our form and we will contact you within 24 hours.</p>
                                <p className=
                                    {ContactCss.emails}>Emails: customer@exclusive.com</p>
                                <p className=
                                    {ContactCss.emails}>Emails: support@exclusive.com</p>

                            </div>
                        </div>
                    </div>


                    <div className={ContactCss.contactInput}>
                        <form>
                            <div>
                                <input type="text" placeholder='Your name' />
                                <input type="text" placeholder='Your Email' />
                                <input type="text" placeholder='Your Phone' />
                            </div>
                            <input type="text" placeholder='Your massage' />
                        </form>
                        <button>Send Massage</button>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Contact