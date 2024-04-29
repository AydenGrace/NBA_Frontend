/* eslint-disable no-unused-vars */

import Button from "../../components/Button";
import styles from "./User.module.scss";

/* eslint-disable react/no-unescaped-entities */
export default function User({ person, handleClick, handlePage }) {
  return (
    <section
      className={`d-flex p-20 jc-sb align-items-center bg-db ${
        person.licensed ? `c-w` : `c-r`
      }`}
    >
      {/* {console.log(person)} */}
      <h3>
        {person.licensed
          ? `Welcome ${person.name} !`
          : `You must be connected !`}
      </h3>
      <nav className={`d-flex g-20 ${styles.nav}`}>
        <Button
          message={person.licensed ? `Log Out` : `Sign In`}
          reverseColor={true}
          handleClick={() => handleClick(true)}
        />
        <Button
          message="User List"
          reverseColor={false}
          handleClick={() => handleClick(false)}
        />
        <Button
          message="Favorites"
          reverseColor={true}
          handleClick={() => handlePage(2)}
        />
      </nav>
    </section>
  );
}
