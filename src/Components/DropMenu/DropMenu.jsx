// import React from 'react'
// import { SidebarData } from '../../Server/Sidebar'
// import { Link } from 'react-router-dom'
// import { HiMenu } from "react-icons/hi";

// function DropMenu() {
//     return (
//         <div>
//             <HiMenu />

//             {
//                 SidebarData.map((item, index) => {
//                     return (
//                         <div key={index}>
//                             <Link to={item.path}>
//                                 <span>{item.title}</span>
//                             </Link>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default DropMenu


// import React, { useState } from 'react';
// import { SidebarData } from '../../Server/Sidebar';
// import { Link } from 'react-router-dom';
// import { HiMenu } from 'react-icons/hi';

// function DropMenu() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div>
//             <HiMenu onClick={toggleMenu} />

//             {isOpen && (
//                 <div>
//                     {SidebarData.map((item, index) => (
//                         <div key={index}>
//                             <Link to={item.path}>
//                                 <span>{item.title}</span>
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default DropMenu;



import React, { useState } from 'react';
import { SidebarData } from '../../Server/Sidebar';
import { Link } from 'react-router-dom';
import { HiMenu,HiX  } from 'react-icons/hi';
import styles from './DropMenu.module.css'; 

function DropMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.dropMenu}>
            <HiMenu className={styles.menuIcon} onClick={toggleMenu} />

            <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.sidebarHeader}>
                    <HiX className={styles.closeIcon} onClick={closeMenu} />
                </div>
                {SidebarData.map((category, index) => (
                    <div key={index} className={styles.category}>
                       
                        <Link to="/"> <h2>{category.title}</h2></Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DropMenu;
