/* eslint-disable no-unused-vars */
import styles from "./FavoriteItem.module.scss";
import Button from "../../../components/Button";

export default function FavoriteItem({ Team, toggleLike }) {
  return (
    <li className={`d-flex justify-content-between align-items-center p-10`}>
      {Team.club}
      <Button
        message="Dislike"
        reverseColor={true}
        handleClick={() => toggleLike(Team._id)}
      />
    </li>
  );
}
