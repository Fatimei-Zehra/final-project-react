import React from 'react'
import styles from '../Timer/Timer.module.css'


export default function Timer() {
    return (
        <div className={styles.info}>
            <div className={styles.rectangle}>
                <div className={styles.red}></div>
                <h1>Today's</h1>
            </div>

            <div className={styles.frame}>
                <div className={styles.flash}>
                    <h1>Flash sales</h1>
                </div>
                <div className={styles.timer}>
                    <div className={styles.timerSide}>
                        <p>Days</p>
                        <span>03</span>
                    </div>
                    <span className={styles.pair}>:</span>
                    <div className={styles.timerSide}>
                        <p>Hours</p>
                        <span>23</span>
                    </div>
                    <span className={styles.pair}>:</span>
                    <div className={styles.timerSide}>
                        <p>Minutes</p>
                        <span>19</span>
                    </div>
                    <span className={styles.pair}>:</span>
                    <div className={styles.timerSide}>
                        <p>Seconds</p>
                        <span>56</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
