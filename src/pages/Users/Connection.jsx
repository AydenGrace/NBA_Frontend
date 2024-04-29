/* eslint-disable no-unused-vars */
import Button from "../../components/Button";
import styles from "./Connection.module.scss";
import UsersList from "./UsersList";

export default function Connection({
  handleUser = () => {},
  handlePage = () => {},
  handleAddUser = () => {},
  handleDeleteUser = () => {},
  handleSelectUser = () => {},
  allUsers = [],
}) {
  function handleBack(e) {
    e.preventDefault();
    handlePage(1);
  }

  function handleForm(e, name) {
    // console.log(name);
    switch (name) {
      case "name":
      case "player":
        handleUser(null, name, e.target.value);
        break;
      case "submit":
        // console.log("Coucou");
        handleUser(null, "licensed", true);
        handleAddUser();
        break;
      default:
        break;
    }
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <section className="d-flex justify-content-center align-items-center p-20 flex-column">
      <a href="" className="ConnectBack my-30" onClick={handleBack}>
        <h2>Back to the main page</h2>
      </a>
      <form className="d-flex flex-column p-20 justify-content-center align-items-center">
        <input
          name="name"
          type="text"
          className="ConnectInput mb-20"
          placeholder="Your Name.."
          onInput={(e) => handleForm(e, "name")}
        />
        <input
          name="player"
          type="text"
          className="ConnectInput mb-20"
          placeholder="Your favorite player.."
          onInput={(e) => handleForm(e, "player")}
        />
        <Button message="Submit" handleClick={(e) => handleForm(e, "submit")} />
      </form>
      <ul className="card d-flex flex-column p-20 UsersList">
        {allUsers.map((user, index) => (
          <UsersList
            key={index}
            index={index}
            user={user}
            handleDelete={handleDeleteUser}
            handleSelectUser={handleSelectUser}
            handlePage={handleBack}
          />
        ))}
      </ul>
    </section>
  );
}
