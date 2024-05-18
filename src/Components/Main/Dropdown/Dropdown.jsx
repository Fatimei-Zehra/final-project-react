import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DropdownStyle from "../Dropdown/Dropdown.module.css"
import GlobalModuleCss from "../../GlobalCss/global.module.css"

function Dropdown() {
    return (
        <div>
            <ul className={DropdownStyle.dropdownList}>
                <li className={`${DropdownStyle.dropdown} ${GlobalModuleCss.fontPoppins}`}>Woman's Fashion
                    <FontAwesomeIcon icon={faChevronRight}  />
                </li>
                <li className={`${DropdownStyle.dropdown} ${GlobalModuleCss.fontPoppins}`}>Men's Fashion
                    <FontAwesomeIcon icon={faChevronRight}/>
                </li>
                <li className={`${DropdownStyle.dropdown} ${GlobalModuleCss.fontPoppins}`}>Electronics</li>
                <li className={`${DropdownStyle.dropdown} ${GlobalModuleCss.fontPoppins}`}>Home & Lifestyle</li>
                <li className={`${DropdownStyle.dropdown} ${GlobalModuleCss.fontPoppins}`}>Sports & Outdoor</li>
                <li className={`${DropdownStyle.drodown} ${GlobalModuleCss.fontPoppins}`}>Baby's & Toys</li>
                <li className={`${DropdownStyle.dropdown} ${GlobalModuleCss.fontPoppins}`}>Groceries & Pets</li>
                <li className={`${DropdownStyle.dropdown} ${GlobalModuleCss.fontPoppins}`}>Health & Beauty</li>
            </ul>
        </div>
    )
}

export default Dropdown