import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styleSearch from "../Search/Search.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"


function Search() {
  return (
    <div>
        <form action="#" className={styleSearch.form}  id='form'>
            <input type="text" className={styleSearch.input} placeholder='What are you looking for?'/>
            <FontAwesomeIcon icon={faSearch} className={styleSearch.searchIcon} />
        </form>
    </div>
  )
}

                  

export default Search