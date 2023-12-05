import axios from 'axios';
import React, { useState } from 'react';

function Userlist() {
  const [listOfUser, setlistOfUser] = useState([]);

  const getQuote = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res);
        setlistOfUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={getQuote}>Get Users</button>
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Userlist;
