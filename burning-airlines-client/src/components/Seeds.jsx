import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_USER = 'http://localhost:3000/users.json';
const SERVER_AIRPLANE = 'http://localhost:3000/airplanes.json';
const SERVER_FLIGHT = 'http://localhost:3000/flights.json';
const SERVER_RESERVATION = 'http://localhost:3000/reservations.json';

const Seeds = () => {
    const [seeds, setSeeds] = useState([]);
    // const [users, setUsers] = useState([]);
    // const [airplanes, setAirplanes] = useState([]);
    // const [flights, setFlights] = useState([]);
    // const [reservations, setReservations] = useState([]);

    const fetchSeeds = () => {
        axios(SERVER_USER).then((response) => {
            setSeeds(response.data);
            setTimeout(fetchSeeds, 4000);
        });
    };

    useEffect(fetchSeeds, []);

    const saveSeed = (content) => {
        axios.post(SERVER_USER, {content: content}).then((response) => {
            setSeeds([...seeds, response.data]);
        });
    };

    return (
        <div>
            <h1>Seed data I hope</h1>
            <SeedForm onSubmit={ saveSeed } />
            <SeedList seeds={seeds} />
        </div>
    );
};

const SeedForm = (props) => {
    const [content, setContent] = useState('');
    const _handleInput = (e) => setContent(e.target.value);
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(content);
        setContent('');
    }

    return (
        <form onSubmit={_handleSubmit}>
            <textarea onInput={_handleInput} value={content} required />
            <input type="submit" value="User email" />
        </form>
    );
}

const SeedList = (props) => {
    return (
        <div>
            { props.seeds.map((s) => <p key={s.id}>{s.content}</p>)}
        </div>
    );
};

export default Seeds;