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

    const fetchSeeds = (serv) => {
        axios(serv).then((response) => {
            setSeeds(response.data);
            setTimeout(fetchSeeds, 4000);
        });
    };

    useEffect(fetchSeeds(SERVER_AIRPLANE), []);
    useEffect(fetchSeeds(SERVER_USER), []);
    useEffect(fetchSeeds(SERVER_FLIGHT), []);
    useEffect(fetchSeeds(SERVER_RESERVATION), []);

    const saveSeed = (content, serv) => {
        axios.post(serv, {content: content}).then((response) => {
            setSeeds([...seeds, response.data]);
        });
    };

    return (
        <div>
            <h1>Seed data I hope</h1>
            <SeedForm onSubmit={ saveSeed(SERVER_AIRPLANE) } />
            <SeedList seeds={seeds} />
            <SeedForm onSubmit={ saveSeed(SERVER_USER) } />
            <SeedList seeds={seeds} />
            <SeedForm onSubmit={ saveSeed(SERVER_FLIGHT) } />
            <SeedList seeds={seeds} />
            <SeedForm onSubmit={ saveSeed(SERVER_RESERVATION) } />
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
        <div>
            <form onSubmit={_handleSubmit}>
                <textarea onInput={_handleInput} value={content} required />
                <input type="submit" value="User email" />
            </form>
            <form onSubmit={_handleSubmit}>
                <textarea onInput={_handleInput} value={content} required />
                <input type="submit" value="Airplane" />
            </form>
            <form onSubmit={_handleSubmit}>
                <textarea onInput={_handleInput} value={content} required />
                <input type="submit" value="Flight" />
            </form>
            <form onSubmit={_handleSubmit}>
                <textarea onInput={_handleInput} value={content} required />
                <input type="submit" value="Reservations" />
            </form>
        </div>
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