import "./styles.css";
import React from "react";

const url = "https://api.github.com/users";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };
  React.useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="App">
      <h3>GitHub users</h3>
      <br />
      <br />
      <div id="users">
        {users.map((person) => {
          const { login, avatar_url } = person;
          return (
            <div id="myDiv">
              <img src={avatar_url} />
              <h4>{login}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
