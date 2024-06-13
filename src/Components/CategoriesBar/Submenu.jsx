import React, { useEffect, useState } from 'react';
import { allJson } from '../../Server/AllJson';
import subStyle from "./submenu.module.css"



const Submenu = ({ hoverCategory }) => {
    console.log(hoverCategory, 'test');
    const [filteredState, setFilteredState] = useState([]);


    return (
        <div > 
            {hoverCategory ? (
                <div className={subStyle.submenu}>
                    {hoverCategory.map((data, index) => (
                        <div key={index}  className={subStyle.subSubmenu}>
                            <h2 className={subStyle.title}>{data.title}</h2>
                            <ul>
                                {
                                    data.children?.map(item => (
                                        <li key={item.id} className={subStyle.titleSub}>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}
                </div>


            ) : (
                <div></div> //No data available
            )}
        </div>
    );
};

export default Submenu;

