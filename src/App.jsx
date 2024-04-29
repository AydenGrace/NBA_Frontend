/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Teams from "./pages/Teams/Teams";
import Header from "./components/Header/Header";
import User from "./pages/Teams/User";
import Connection from "./pages/Users/Connection";
import Loading from "./components/Loading/Loading";
import Favorites from "./pages/Favorites/Favorites";
import { url } from "./url";

function App() {
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [user, setUser] = useState({
    name: "",
    player: "",
    licensed: true,
  });
  const [currentUser, setCurrentUser] = useState({
    name: "",
    player: "",
    licensed: false,
  });
  const [allUser, setAllUser] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  function handleLoading() {
    // setTimeout(() => {
    //   setIsLoading(false);
    //   // setTeams(dataTeams.Teams);
    // }, 2500);
  }

  function handleSearch(text) {
    setSearch(text);
    // console.log(search);
  }
  function handleClick(isLogOut) {
    isLogOut ? handleCurrentUser({}) : null;
    handlePage(0);
  }
  function handleFilter(x) {
    // console.log(x);
    setFilter(x);
  }
  function handlePage(x) {
    handleLoading();
    setPage(x);
  }
  function handleUser(U, proprety, value) {
    U
      ? setUser({ ...user, name: U.name, player: U.player, licensed: true })
      : setUser({ ...user, [proprety]: value });
  }

  function handleCurrentUser(U) {
    setCurrentUser({
      ...currentUser,
      name: U.name,
      player: U.player,
      licensed: U.licensed,
    });
  }
  function handleAddUser() {
    createUser();
  }

  async function createUser() {
    try {
      const response = await fetch(`${url}/api/players/add`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        const user_res = await response.json();
        setAllUser([...allUser, { ...user }]);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser(index) {
    console.log("DeleteUser");
    console.log(allUser[index]);
    try {
      const response = await fetch(`${url}/api/players/delete`, {
        method: "DELETE",
        body: JSON.stringify(allUser[index]),
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        const user_res = await response.json();
        setAllUser((users) => users.filter((v, i) => i !== index));
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  function handleDeleteUser(index) {
    deleteUser(index);
  }
  function toggleLike(id) {
    const newTeams = teams;
    newTeams.find((i) => i._id === id).liked = !newTeams.find(
      (i) => i._id === id
    ).liked;
    setTeams([...newTeams]);
  }

  useEffect(() => {
    async function getTeams() {
      try {
        setIsLoading(true);
        const response = await fetch(`${url}/api/teams`);
        if (response.ok) {
          const teams = await response.json();
          setTeams(teams);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    async function getUsers() {
      try {
        const response = await fetch(`${url}/api/players`);
        if (response.ok) {
          const Users = await response.json();
          setAllUser(Users);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getTeams();
    getUsers();
  }, []);

  function switchPage() {
    switch (page) {
      case 2:
        return (
          <Favorites
            handlePage={handlePage}
            Teams={teams.filter((t) => t.liked === true)}
            toggleLike={toggleLike}
          />
        );
      case 1:
        return (
          <>
            <Header
              handleFilter={handleFilter}
              handleSearch={handleSearch}
              handlePage={handlePage}
              handleUser={handleClick}
              filter={filter}
              person={currentUser}
            />
            <User
              person={currentUser}
              handleClick={handleClick}
              handlePage={handlePage}
            />
            {isLoading ? (
              <Loading />
            ) : (
              currentUser.licensed && (
                <Teams
                  Teams={teams}
                  filter={filter}
                  search={search}
                  toggleLike={toggleLike}
                />
              )
            )}
          </>
        );
      case 0:
      default:
        return (
          <Connection
            handleUser={handleUser}
            handleAddUser={handleAddUser}
            handlePage={handlePage}
            allUsers={allUser}
            handleDeleteUser={handleDeleteUser}
            handleSelectUser={handleCurrentUser}
          />
        );
    }
  }

  // console.log(allUser);
  return <>{switchPage()}</>;
}

export default App;
