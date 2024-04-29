/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../Button";
import styles from "./Header.module.scss";
import Search from "./Search";
import HeaderMobile from "./components/HeaderMobile";

export default function Header({
  handleFilter = () => {},
  handleSearch = () => {},
  handlePage = () => {},
  handleUser = () => {},
  filter = "Submit",
  person,
}) {
  const [showMenu, setShowMenu] = useState(false);
  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <header className="container d-flex flex-column align-items-center p-20 g-10">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex w-100">
          <h1>NBA</h1>
        </div>
        <div className="d-flex w-100 justify-content-center">
          <Search handleSearch={handleSearch} />
        </div>
        <div className="d-flex w-100 jc-fe">
          <nav className={`d-flex g-10 ${styles.nav}`}>
            <Button
              message="East"
              handleClick={() => {
                handleFilter("East");
              }}
              filter={filter}
            />
            <Button
              message="West"
              handleClick={() => {
                handleFilter("West");
              }}
              filter={filter}
            />
            <Button
              message="All"
              reverseColor={true}
              handleClick={() => {
                handleFilter("All");
              }}
              filter={filter}
            />
          </nav>
          <i
            onClick={() => setShowMenu(!showMenu)}
            className={`fas fa-bars mr-10 ${styles.mobileHeader}`}
          ></i>
          {showMenu && (
            <>
              <div
                className="calc"
                onClick={() => setShowMenu(!showMenu)}
              ></div>
              <HeaderMobile
                handleShowMenu={handleShowMenu}
                handleFilter={handleFilter}
                handlePage={handlePage}
                handleUser={handleUser}
                person={person}
              />
            </>
          )}
        </div>
      </div>
      <hr />
    </header>
  );
}
