import { Link } from 'react-router-dom';

const Users = ({users}) => {
    console.log(users);
    return (
        <div>
            <h1>Users</h1>
            <h1><Link to="/users/create" className="create-link">Create Users</Link></h1> 

        </div>
    );
};
export default Users;
