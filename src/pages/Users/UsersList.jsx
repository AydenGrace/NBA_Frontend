/* eslint-disable no-unused-vars */
import Button from "../../components/Button";

export default function UsersList({
  user = null,
  handleDelete,
  handleSelectUser,
  handlePage,
  index,
}) {
  return (
    <li className="d-flex flex-column jc-sb mb-20 UserItem">
      <div className="d-flex jc-sb w-100">
        <p
          onClick={(e) => {
            handleSelectUser(user);
            handlePage(e, 1);
          }}
        >
          {user.name} | {user.player}
        </p>
        <Button
          message="Delete"
          reverseColor={true}
          handleClick={() => handleDelete(index)}
        ></Button>
      </div>
      <hr className="w-100 border-primary" />
    </li>
  );
}
