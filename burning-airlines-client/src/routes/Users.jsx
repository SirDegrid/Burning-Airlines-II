import { Link } from 'react-router-dom';
import { UserList } from '../components/CreateUser';
import { useState, useEffect } from "react";
import axios from 'axios';

const SERVER_USER = 'http://localhost:3000/users.json';

const Users = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        axios(SERVER_USER).then((response) => {
            setUsers(response.data);
            // console.log(response.data);
            setTimeout(fetchUsers, 10000);
        });
    };
    useEffect(fetchUsers, []);

    // console.log(users);
    return (
        <div>
            <h1>Users</h1>
            <h1><Link to="/users/create" className="create-link">Create Users</Link></h1>
            <UserList users={users} />

        </div>
    );
};
export default Users;
