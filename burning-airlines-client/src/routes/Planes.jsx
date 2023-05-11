import { Link } from 'react-router-dom';
import { PlaneList } from '../components/CreatePlane';
console.log(PlaneList);


const Planes = () => {
    return (
        <div>
            <h1>Planes</h1>
            <h1><Link to="/planes/create" className="create-link">Create Plane</Link></h1> 

        </div>
    );    
};
export default Planes;