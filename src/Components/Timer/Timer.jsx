import React from 'react'
import styles from '../Timer/Timer.module.css'
import GlobalCss from "../GlobalCss/global.css"
import GlobalModuleCss from "../GlobalCss/global.module.css"


export default function Timer() {
    return (
       
            <div className="container">
                <div className={styles.rectangle}>
                    <div className={styles.red}></div>
                    <h1 className={`${GlobalModuleCss.fontPoppins} ${styles.rectangleText}`}>Today's</h1>
                </div>

                <div className={styles.frame}>
                    <div className={styles.flash}>
                        <h1>Flash Sales</h1>
                    </div>
                    
                    <div className={styles.timer}>
                        <div className={styles.timerSide}>
                            <p className={styles.timerSideP}>Days</p>
                            <span className={styles.timerSideSpan}>03</span>
                        </div>
                        <span className={styles.pair}>:</span>
                        <div className={styles.timerSide}>
                            <p className={styles.timerSideP}>Hours</p>
                            <span className={styles.timerSideSpan}>23</span>
                        </div>
                        <span className={styles.pair}>:</span>
                        <div className={styles.timerSide}>
                            <p className={styles.timerSideP}>Minutes</p>
                            <span className={styles.timerSideSpan}>19</span>
                        </div>
                        <span className={styles.pair}>:</span>
                        <div className={styles.timerSide}>
                            <p className={styles.timerSideP}>Seconds</p>
                            <span className={styles.timerSideSpan}>56</span>
                        </div>
                    </div>

                </div>
            </div>
     

    )
}
