import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_FLIGHT = 'http://localhost:3000/flights.json';

const CreateFlight = () => {
    const [flights, setFlights] = useState([]);

    const fetchFlights = () => {
        axios(SERVER_FLIGHT).then((response) => {
            setFlights(response.data);
            console.log(response.data);
            setTimeout(fetchFlights, 10000);
        });
    };

    useEffect(fetchFlights, []);

    const saveSeed = (content) => {
        console.log(content);
        axios.post(SERVER_FLIGHT, {number: content[0], origin: content[1], destination: content[2]}).then((response) => {
            console.log(response)
            setFlights([...flights, response.data]);
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div>
            <h2>Create Flight</h2>
            <FlightForm onSubmit={ saveSeed } />
            <FlightList flights={flights} />
        </div>
    );
};

const FlightForm = (props) => {
    const [number, setNumber] = useState('');
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const _handleInputN = (e) => setNumber(e.target.value);
    const _handleInputR = (e) => setOrigin(e.target.value);
    const _handleInputC = (e) => setDestination(e.target.value);
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit([number, origin, destination]);
        setNumber('');
        setOrigin('');
        setDestination('');
    }

    return (
        <div class="form-container">
            <form onSubmit={_handleSubmit}>
                <div>
                    <label htmlFor="flight-number">Flight Number:</label>
                    <input onInput={_handleInputN} value={number} required placeholder='234'/>
                </div>
                <div>
                    <label htmlFor="origin">Origin:</label>
                    <input onInput={_handleInputR} value={origin} required placeholder='Melbourne'/>
                </div>
                <div>
                    <label htmlFor="destination">Destination:</label>
                    <input onInput={_handleInputC} value={destination} required placeholder='Sydney'/>
                </div>
                <div>
                <input type="submit" value="Create Flight" />
                </div>
            </form>
        </div>
    );
}

const FlightList = (props) => {
    return (
        <div>
            { props.flights.map((s) => <p key={s.id}>{s.number}, {s.origin}, {s.destination}</p>)}
        </div>
    );
};

export default CreateFlight;