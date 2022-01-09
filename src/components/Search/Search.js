import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import styles from './Search.module.css';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false); 

  const filteredPersons = details.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return (
        <Scroll>
          <SearchList filteredPersons={filteredPersons} />
        </Scroll>
      );
    }
  }

  return (
    <section className="formNav">
      <div className="pa2">
        <input 
          className={styles.text_bar}
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      <div className="">
        <h2 className={styles.f2}>Search your course</h2>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;