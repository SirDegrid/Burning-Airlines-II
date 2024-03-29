import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Users from '../routes/Users';


const SERVER_USER = 'http://localhost:3000/users.json';

const CreateUser = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
        axios(SERVER_USER).then((response) => {
            setUsers(response.data);
            // console.log(response.data);
            setTimeout(fetchUsers, 10000);
        });
    };

    useEffect(fetchUsers, []);

    const saveUser = (content) => {
        console.log(content);
        axios.post(SERVER_USER, {email: content[0], password: content[1]}).then((response) => {
            console.log(response)
            setUsers([...users, response.data]);
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div>
            <h2>Create User</h2>
            <UserForm onSubmit={ saveUser } />
        </div>
    );
};

const UserForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const _handleInputE = (e) => setEmail(e.target.value);
    const _handleInputP = (e) => setPassword(e.target.value);
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit([email, password]);
        setEmail('');
        setPassword('');
    }

    return (
        <div className="form-container">
            <form onSubmit={_handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input onInput={_handleInputE} placeholder="email@hotmail.com" value={email} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input onInput={_handleInputP} value={password} required placeholder="chicken"/>
                </div>
                <div>
                    <input type="submit" value="Create User" />
                </div>
            </form>
        </div>
    );
}

export const UserList = (props) => {
    return ( 
        <div>
            <ul>
            { props.users.map((s) => <li><a href={`users/${s.id}`} key={s.id}>{s.email}, {s.password}</a></li>)}
            </ul>
        </div>
    );
};

export default CreateUser;