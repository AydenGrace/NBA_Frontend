/* eslint-disable no-unused-vars */
import styles from "./Favorites.module.scss";
import FavoriteItem from "./components/FavoriteItem";

export default function Favorites({ handlePage, Teams, toggleLike }) {
  function handleBack(e) {
    e.preventDefault();
    handlePage(1);
  }

  return (
    <section className="d-flex justify-content-center align-items-center p-20 flex-column">
      <a href="" className="ConnectBack my-30" onClick={handleBack}>
        <h2>Back to the main page</h2>
      </a>
      <ul className={`card d-flex flex-column p-20 UsersList ${styles.list}`}>
        {Teams.length ? (
          Teams.map((team, index) => (
            <FavoriteItem key={index} Team={team} toggleLike={toggleLike} />
          ))
        ) : (
          <p>No Team Found.</p>
        )}
      </ul>
    </section>
  );
}
