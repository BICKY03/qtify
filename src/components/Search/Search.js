import React from "react";
import {ReactComponent as SearchIcon} from "../../assets/search-icon (1).svg"
import styles from "./Search.module.css"

const Search = ({ search }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={search}></input>
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;