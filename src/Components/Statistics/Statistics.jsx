import React from 'react'
import StatisticsCss from "./Statistics.module.css"
import { CiShop } from "react-icons/ci";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";




function Statistics() {
    return (
        <div>
            <div className={StatisticsCss.statistics}>
                <div className={StatisticsCss.statisticsItem} >
                    <div className={StatisticsCss.statisticsIcon} >
                        <CiShop className={StatisticsCss.shopIcon} id='shop' />
                    </div>
                    <div className={StatisticsCss.delivery}>
                        <h4 className={StatisticsCss.quantity}  >10.5k</h4>
                        <p className={StatisticsCss.aboutService}>Sallers active our site</p>
                    </div>
                </div>

                <div className={StatisticsCss.statisticsItem} >
                    <div className={StatisticsCss.statisticsIcon} >
                        <PiCurrencyCircleDollarLight className={StatisticsCss.priceIcon} />
                    </div>
                    <div className={StatisticsCss.delivery}>
                        <h4 className={StatisticsCss.quantity}  >33k</h4>
                        <p className={StatisticsCss.aboutService}>Mopnthly Produduct Sale</p>
                    </div>
                </div>

                <div className={StatisticsCss.statisticsItem} >
                    <div className={StatisticsCss.statisticsIcon} >
                        <MdOutlineShoppingBag className={StatisticsCss.shopBagIcon} />
                    </div>
                    <div className={StatisticsCss.delivery}>
                        <h4 className={StatisticsCss.quantity}  >45.5k</h4>
                        <p className={StatisticsCss.aboutService}>Mopnthly Produduct Sale</p>
                    </div>
                </div>

                <div className={StatisticsCss.statisticsItem} >
                    <div className={StatisticsCss.statisticsIcon} >
                        <TbMoneybag  className={StatisticsCss.moneyBagIcon}/>
                    </div>
                    <div className={StatisticsCss.delivery}>
                        <h4 className={StatisticsCss.quantity}  >25k</h4>
                        <p className={StatisticsCss.aboutService}>Anual gross sale in our site</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics