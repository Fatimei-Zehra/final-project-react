import React from 'react'
import styles from '../Timer/Timer.module.css'
import GlobalCss from "../GlobalCss/global.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"


export default function Timer() {
    return (
       
            <div className="container">
                <div className={styles.rectangle} id='timer-mobile-rectangle'>
                    <div className={styles.red}></div>
                    <h1 className={`${GlobalModuleCss.fontPoppins} ${styles.rectangleText}`}>Today's</h1>
                </div>

                <div className={styles.frame} id='frame'>
                    <div className={styles.flash}>
                        <h1 className='flash-sales'>Flash Sales</h1>
                    </div>
                    
                    <div className={styles.timer} id='timer'>
                        <div className={styles.timerSide}>
                            <p className={styles.timerSideP}>Days</p>
                            <span className={styles.timerSideSpan} id='daysNum'>03</span>
                        </div>
                        <span className={styles.pair} id='dayPair'>:</span>
                        <div className={styles.timerSide}>
                            <p className={styles.timerSideP}>Hours</p>
                            <span className={styles.timerSideSpan} id='hoursNum'>23</span>
                        </div>
                        <span className={styles.pair} id='hourPair'>:</span>
                        <div className={styles.timerSide}>
                            <p className={styles.timerSideP}>Minutes</p>
                            <span className={styles.timerSideSpan} id='minutesNum'>19</span>
                        </div>
                        <span className={styles.pair} id='minPair'>:</span>
                        <div className={styles.timerSide}>
                            <p className={styles.timerSideP}>Seconds</p>
                            <span className={styles.timerSideSpan} id='secondsNum'>56</span>
                        </div>
                    </div>

                </div>
            </div>
     

    )
}
