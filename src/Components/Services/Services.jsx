import React from 'react'
import ServicesCss from "../Services/Services.module.css"
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function Services() {
    return (
        <div>
            <div className="container">
                <div className={ServicesCss.services}>
                    <div className={ServicesCss.serviceItem}>
                        <div className={ServicesCss.serviceIcon}>
                            <TbTruckDelivery className={ServicesCss.deliveryIcon} />
                        </div>
                        <div className={ServicesCss.delivery}>
                            <h4 className={ServicesCss.serviceName}>free and fast delivery</h4>
                            <p className={ServicesCss.aboutService}>Free delivery for all orders over $140</p>
                        </div>
                    </div>

                    <div className={ServicesCss.serviceItem}>
                        <div className={ServicesCss.serviceIcon}>
                            <TfiHeadphoneAlt className={ServicesCss.deliveryIcon} />
                        </div>
                        <div className={ServicesCss.delivery}>
                            <h4 className={ServicesCss.serviceName}>free and fast delivery</h4>
                            <p className={ServicesCss.aboutService}>Free delivery for all orders over $140</p>
                        </div>
                    </div>

                    <div className={ServicesCss.serviceItem}>
                        <div className={ServicesCss.serviceIcon}>
                            <TbTruckDelivery className={ServicesCss.deliveryIcon}/>
                        </div>
                        <div className={ServicesCss.delivery}>
                            <h4 className={ServicesCss.serviceName}>free and fast delivery</h4>
                            <p className={ServicesCss.aboutService}>Free delivery for all orders over $140</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services