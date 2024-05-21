import React from 'react'
import styles from '../Categories/Categories.module.css'
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiHeadphonesLight } from "react-icons/pi";
import { TbDeviceGamepad } from "react-icons/tb";
export default function Categories() {
    return (
        <div>
            <div className={styles.rectangle}>
                <div className={styles.red}></div>
                <h1>Categories</h1>

            </div>
            <h1 className={styles.browsing}>Browse By Category</h1>
            <div className={styles.categories}>
                <div className={styles.categorieBoxes}>
                    <IoIosPhonePortrait className={styles.icon} />
                    <h1>Phones</h1>
                </div>
                <div className={styles.categorieBoxes}>
                    <HiOutlineComputerDesktop className={styles.icon} />
                    <h1>Computers</h1>
                </div>
                <div className={styles.categorieBoxes}>
                    <BsSmartwatch className={styles.icon} />
                    <h1>SmartWatch</h1>
                </div>
                <div className={styles.categorieBoxes}>
                    <MdOutlineCameraAlt className={styles.icon} />
                    <h1>Camera</h1>
                </div>
                <div className={styles.categorieBoxes}>
                    <PiHeadphonesLight className={styles.icon} />
                    <h1>HeadPhones</h1>
                </div>
                <div className={styles.categorieBoxes}>
                    <TbDeviceGamepad className={styles.icon} />
                    <h1>Gaming</h1>
                </div>
            </div>
        </div>
    )
}
