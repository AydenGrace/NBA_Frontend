// import { useEffect, useState } from "react";
import styles from "./TeamCard.module.scss";

export default function TeamCard({ Team = [], toggleLike }) {
  // const [hovered, setHovered] = useState(false);
  //CURSOR ON HOVER
  // useEffect(() => {
  //   document.body.style.cursor = hovered ? "pointer" : "auto";
  // }, [hovered]);

  return (
    <div
      style={{ width: "250px", height: "250px" }}
      className={`${styles.Teamcard} card p-20 d-flex flex-column`}
    >
      <h4 className="p-10">
        NAME : <span className="c-o">{Team.club}</span>
      </h4>
      <h4 className="p-10">
        CITY : <span className="c-o">{Team.name}</span>
      </h4>
      <div className="container d-flex justify-content-center align-item-center">
        <img className="as-c card-img" src={Team.logo} alt="" />
      </div>
      <i
        className={
          Team.liked
            ? `${styles.like} fa-heart fa-solid c-p fa-xl`
            : `${styles.like} fa-heart fa-regular c-p fa-xl`
        }
        onClick={() => toggleLike(Team._id)}
      ></i>
    </div>
  );
}
