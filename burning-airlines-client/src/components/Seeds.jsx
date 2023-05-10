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
        axios(SERVER_AIRPLANE).then((response) => {
            setSeeds(response.data);
            // console.log(response.data);
            setTimeout(fetchSeeds, 10000);
        });
    };

    useEffect(fetchSeeds, []);

    const saveSeed = (content) => {
        console.log(content);
        axios.post(SERVER_AIRPLANE, {name: content[0], row: content[1], column: content[2]}).then((response) => {
            console.log(response)
            setSeeds([...seeds, response.data]);
        }).catch((error) => {
            console.error(error);
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
    const [name, setName] = useState('');
    const [row, setRow] = useState('');
    const [column, setColumn] = useState('');
    const _handleInputN = (e) => setName(e.target.value);
    const _handleInputR = (e) => setRow(e.target.value);
    const _handleInputC = (e) => setColumn(e.target.value);
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit([name, row, column]);
        setName('');
        setRow('');
        setColumn('');
    }

    return (
        <form onSubmit={_handleSubmit}>
            <textarea onInput={_handleInputN} value={name} required />
            <textarea onInput={_handleInputR} value={row} required />
            <textarea onInput={_handleInputC} value={column} required />
            <input type="submit" value="User email" />
        </form>
    );
}

const SeedList = (props) => {
    return (
        <div>
            { props.seeds.map((s) => <p key={s.id}>{s.name}, {s.row}, {s.column}</p>)}
        </div>
    );
};

export default Seeds;