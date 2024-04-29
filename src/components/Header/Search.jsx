/* eslint-disable no-unused-vars */
import styles from "./Search.module.scss";

export default function Search({ handleSearch = () => {} }) {
  function handleInput(e) {
    e.preventDefault();
    e.stopPropagation();
    handleSearch(e.target.value);
  }
  return (
    <div className={`${styles.searchBar}`}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        name="search"
        onInput={handleInput}
        placeholder="Search.."
      />
    </div>
  );
}
