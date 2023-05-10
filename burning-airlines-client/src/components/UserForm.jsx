import { useState } from 'react';
import axios from 'axios';

const SERVER_USER = 'http://localhost:3000/users.json';

axios(SERVER_USER).then((response) => {
  // setSeeds(response.data);
  console.log(response.data);
  // setTimeout(fetchSeeds, 4000);
});

const UserForm = (props) => {
  const [users, setUsers] = useState('');

  const _handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(users);
  };

  const _handleInput = (event) => {
    setUsers(event.target.value);
  };

  return (
    <form onSubmit={_handleSubmit}>
      <input
        type="search"
        required
        autoFocus
        placeholder="email"
        onInput={_handleInput}
      />
      <input type="submit" value={`Search for ${users}`} />
    </form>
  );
};

export default UserForm;
