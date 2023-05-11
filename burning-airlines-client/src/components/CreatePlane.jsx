import { useState, useEffect } from 'react';
import axios from 'axios';


const SERVER_AIRPLANE = 'http://localhost:3000/airplanes.json';
const SERVER_RESERVATION = 'http://localhost:3000/reservations.json';

const CreatePlanes = () => {
    const [planes, setPlanes] = useState([]);

    const fetchPlanes = () => {
        axios(SERVER_AIRPLANE).then((response) => {
            setPlanes(response.data);
            // console.log(response.data);
            setTimeout(fetchPlanes, 10000);
        });
    };

    useEffect(fetchPlanes, []);

    const savePlane = (content) => {
        console.log(content);
        axios.post(SERVER_AIRPLANE, {name: content[0], row: content[1], column: content[2]}).then((response) => {
            console.log(response)
            setPlanes([...planes, response.data]);
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div>
            <h2>Create Plane</h2>
            <PlaneForm onSubmit={ savePlane } />
            <PlaneList planes={planes} />
        </div>
    );
};

const PlaneForm = (props) => {
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
        <div className="form-container">
            <form onSubmit={_handleSubmit}>
                <div>
                    <label htmlFor="name">Plane Name:</label>
                    <input onInput={_handleInputN} value={name} required placeholder='Boeing 747'/>
                </div>
                <div>
                    <label htmlFor="row">Row:</label>
                    <input onInput={_handleInputR} value={row} required placeholder='12'/>
                </div>
                <div>
                    <label htmlFor="column">Seat:</label>
                    <input onInput={_handleInputC} value={column} required placeholder='E'/>
                </div>
                <div>
                    <input type="submit" value="Create Plane" />
                </div>
            </form>
        </div>
    );
}

const PlaneList = (props) => {
    return (
        <div>
            { props.planes.map((s) => <p key={s.id}>{s.name}, {s.row}, {s.column}</p>)}
        </div>
    );
};

export default CreatePlanes;

