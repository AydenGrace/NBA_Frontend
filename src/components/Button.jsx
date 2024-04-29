/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Button({
  message = "Submit",
  handleClick = () => {},
  reverseColor = false,
  filter = "",
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={
        filter
          ? filter.toLowerCase().localeCompare(message.toLowerCase())
            ? `btn ${hovered ? `btn-primary` : `btn-reverse-primary`}`
            : `btn ${hovered ? `btn-reverse-primary` : `btn-primary`}`
          : reverseColor
          ? `btn ${hovered ? `btn-primary` : `btn-reverse-primary`}`
          : `btn ${hovered ? `btn-reverse-primary` : `btn-primary`}`
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {message}
    </button>
  );
}
