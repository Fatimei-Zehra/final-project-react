import React from 'react'
import Dropdown from './Dropdown/Dropdown'
import MainStyle from "../Main/Main.module.css"
import Slider from './Slider/Slider'


function Main() {
    return (
        <div>
            <div className="container">
                <div className={MainStyle.sectionItems}>
                    <div className={MainStyle.sectionLeftItems}>
                        <Dropdown />
                    </div>

                    <div className={MainStyle.sliderBox}>
                        <Slider />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Main