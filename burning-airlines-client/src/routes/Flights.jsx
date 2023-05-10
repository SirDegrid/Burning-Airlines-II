import { Link } from 'react-router-dom';

const Flights = () => {
    return (
        <div>
            <h1>Flights</h1>
            <h1><Link to="/flights/create" className="create-link">Create Flight</Link></h1> 

        </div>
    );
};
export default Flights;
