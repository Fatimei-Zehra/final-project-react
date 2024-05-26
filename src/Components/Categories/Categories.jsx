import React from 'react'
import styles from '../Categories/Categories.module.css'
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { PiHeadphonesLight } from "react-icons/pi";
import { TbDeviceGamepad } from "react-icons/tb";
import GlobalCss from "../GlobalCss/global.css"
export default function Categories() {
    return (
        <div className='container'>
            <div className={styles.rectangle}>
                <div className={styles.red}></div>
                <h1>Categories</h1>

            </div>
            <h1 className={styles.browsing}>Browse By Category</h1>
            <div className={styles.categories}>
                <div className={styles.categorieBoxes}>
                    <IoIosPhonePortrait className={styles.icon} />
                    <h1 className={styles.categoriesName}>Phones</h1>
                </div>
                <div className={styles.categorieBoxes}>
                    <HiOutlineComputerDesktop className={styles.icon} />
                    <h1 className={styles.categoriesName} >Computers</h1>
                </div>
                <div className={styles.categorieBoxes}>
                    <BsSmartwatch className={styles.icon} />
                    <h1 className={styles.categoriesName}>SmartWatch</h1>
                </div>
                <div className={styles.categorieBoxes}>
                    <MdOutlineCameraAlt className={styles.icon} />
                    <h1 className={styles.categoriesName}>Camera</h1>
                </div>
                <div className={styles.categorieBoxes}>
                    <PiHeadphonesLight className={styles.icon} />
                    <h1 className={styles.categoriesName}>HeadPhones</h1>
                </div>
                <div className={styles.categorieBoxes}>
                    <TbDeviceGamepad className={styles.icon} />
                    <h1 className={styles.categoriesName} >Gaming</h1>
                </div>
            </div>
        </div>
    )
}
