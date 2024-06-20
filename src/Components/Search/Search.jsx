import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styleSearch from "../Search/Search.module.css"
import MediaStyle from "../GlobalCss/Media/media.css"
import { useState } from 'react';
import Modal from 'react-modal';


function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {

    console.log(`Searching for: ${searchTerm}`);

    handleCloseModal();

    return (
      <div>
        <form action="#" className={styleSearch.form} id='form'>
          <input type="text" className={styleSearch.input} placeholder='What are you looking for?' />
          <FontAwesomeIcon icon={faSearch} className={styleSearch.searchIcon} onClick={handleOpenModal} />
        </form>


        <Modal
          isOpen={isOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Search Modal"
        >
          <h2>Search</h2>
          <input
            type="text"
            placeholder="Enter search term"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      </div>
    )
  }
}



export default Search