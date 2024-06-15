import React from 'react'
import ServicesCss from "../Services/Services.module.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function Services() {
    return (
        <div>
            <div className="container">
                <div className={ServicesCss.services} id='services'>
                    <div className={ServicesCss.serviceItem} serviceItem="service-item">
                        <div className={ServicesCss.serviceIcon} serviceIcon="sevices-icons">
                            <TbTruckDelivery className={ServicesCss.deliveryIcon} id='truck'/>
                        </div>
                        <div className={ServicesCss.delivery}>
                            <h4 className={ServicesCss.serviceName} name="services-name" >free and fast delivery</h4>
                            <p className={ServicesCss.aboutService} service="about-servece">Free delivery for all orders over $140</p>
                        </div>
                    </div>

                    <div className={ServicesCss.serviceItem} serviceItem="service-item">
                        <div className={ServicesCss.serviceIcon} serviceIcon="sevices-icons">
                            <TfiHeadphoneAlt className={ServicesCss.deliveryIcon}  id='headphone'/>
                        </div>
                        <div className={ServicesCss.delivery}>
                            <h4 className={ServicesCss.serviceName} name="services-name">free and fast delivery</h4>
                            <p className={ServicesCss.aboutService} service="about-servece">Friendly 24/7 customer support</p>
                        </div>
                    </div>

                    <div className={ServicesCss.serviceItem} serviceItem="service-item">
                        <div className={ServicesCss.serviceIcon} serviceIcon="sevices-icons">
                            <TbTruckDelivery className={ServicesCss.deliveryIcon} id='truck-second'/>
                        </div>
                        <div className={ServicesCss.delivery}>
                            <h4 className={ServicesCss.serviceName} name="services-name">free and fast delivery</h4>
                            <p className={ServicesCss.aboutService} service="about-servece">We reurn money within 30 days</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services