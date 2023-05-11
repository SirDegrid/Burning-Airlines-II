import { Link } from 'react-router-dom';
// import { PlaneList } from '../components/CreatePlane';
// import { useState, useEffect } from "react";
// import axios from 'axios';

// const SERVER_AIRPLANE = 'http://localhost:3000/airplanes.json';


const Planes = () => {

    // const [planes, setPlanes] = useState([]);

    // const fetchPlanes = () => {
    //     axios(SERVER_AIRPLANE).then((response) => {
    //         setPlanes(response.data);
    //         // console.log(response.data);
    //         setTimeout(fetchPlanes, 10000);
    //     });
    // };

    // useEffect(fetchPlanes, []);

    return (
        <div>
            <h1>Planes</h1>
            <h1><Link to="/planes/create" className="create-link">Create Plane</Link></h1> 
            {/* <PlaneList planes={planes} /> */}

        </div>
    );    
};
export default Planes;