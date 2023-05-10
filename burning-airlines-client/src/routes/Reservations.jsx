import { Link } from 'react-router-dom';

const Reservations = () => {
    return (
        <div>
            <h1>Reservations</h1>
            <h1><Link to="/reservations/create" className="create-link">Create Reservation</Link></h1> 

        </div>
    );
};
export default Reservations;
