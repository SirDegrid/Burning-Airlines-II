import { Link } from 'react-router-dom';
// import { CreateFlight } from '../components/CreateFlight';
import { useState, useEffect } from "react";
import axios from 'axios';

const SERVER_FLIGHT = 'http://localhost:3000/flights.json';

const Flights = () => {

        const [flights, setFlights] = useState([]);
    
        const fetchFlights = () => {
            axios(SERVER_FLIGHT).then((response) => {
                setFlights(response.data);
                console.log(response.data);
                setTimeout(fetchFlights, 10000);
            });
        };
        useEffect(fetchFlights, []);

    return (
        <div>
            <h1>Flights</h1>
            <h1><Link to="/flights/create" className="create-link">Create Flight</Link></h1> 
            {/* <FlightList flights={flights} /> */}

        </div>
    );
};
export default Flights;



