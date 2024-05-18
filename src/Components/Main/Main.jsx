import React from 'react'
import Dropdown from './Dropdown/Dropdown'
import MainStyle from "../Main/Main.module.css"
import Slider from './Slider/Slider'
import MediaStyle from "../GlobalCss/Media/media.css"



function Main() {
    return (
        <div>
            <div className="container">
                <div className={MainStyle.sectionItems} id='section-items-main'>
                    <div className={MainStyle.sectionLeftItems}>
                        <Dropdown />
                    </div>

                    <div className={MainStyle.sliderBox} id='slider-box'>
                        <Slider />
                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default Main