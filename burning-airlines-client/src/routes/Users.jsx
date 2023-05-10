
import { useState, useEffect } from "react";
import axios from "axios";
import UserForm from "../components/UserForm";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const SERVER_USER = 'http://localhost:3000/users.json';
            axios.get(SERVER_USER).then((response) => {
                setUsers(response.data);
                console.log(response.data[0].email);
                });
            },[]);

            const fetchUsers = ({ email }, { password }) => {
                console.log("email entered is", email);
                console.log("password entered is", password);
                

            const SERVER_USER = "http://localhost:3000/users.json";
            axios.post(SERVER_USER, { email, password }).then((response) => {
            setUsers([...users, response.data]);
            console.log(response.data);
            });
        };

    const userEmails = users.map((user) => user.email)

    return (
        <div>
            <UserForm onSubmit={fetchUsers} />
            <p>User emails: { userEmails }</p>
        </div>
    );
};

export default Users;