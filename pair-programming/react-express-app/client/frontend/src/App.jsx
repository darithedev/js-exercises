// client/src/App.jsx
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");

  const [users, fetchUsers] = useState([]);

  const getData = () => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchUsers(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>React Website with an Express backend</h1>

      {/*<button onClick={connectToBackend}>Send Request to Backend</button>*/}
      {/* Render the newly fetched data inside data */}
      <p>{data}</p>
      <h2>React Fetch API From Backend</h2>
      <ul>
        {users.map((item, i) => {
          return (
            <li key={i}>
              Name: {item.name} Email: {item.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;