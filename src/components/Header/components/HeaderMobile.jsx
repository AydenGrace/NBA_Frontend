/* eslint-disable no-unused-vars */
import styles from "./HeaderMobile.module.scss";

export default function HeaderMobile({
  handleShowMenu = () => {},
  handleFilter = () => {},
  handlePage = () => {},
  handleUser = () => {},
  person,
}) {
  function handleClick(button) {
    switch (button) {
      case "Favorites":
        handlePage(2);
        break;
      case "Users":
        handleUser(false);
        break;
      case "Login":
        handleUser(true);
        break;
      case "West":
      case "East":
      case "All":
        handleFilter(button);
        break;
      default:
        break;
    }
    handleShowMenu();
  }
  return (
    <ul className={`d-flex flex-column p-20 g-20 ${styles.container}`}>
      <li onClick={() => handleClick("All")}>All</li>
      <li onClick={() => handleClick("East")}>East</li>
      <li onClick={() => handleClick("West")}>West</li>
      <li onClick={() => handleClick("Login")}>
        {person.licensed ? "Logout" : "Login"}
      </li>
      <li onClick={() => handleClick("Users")}>Users</li>
      <li onClick={() => handleClick("Favorites")}>Favorites</li>
    </ul>
  );
}
