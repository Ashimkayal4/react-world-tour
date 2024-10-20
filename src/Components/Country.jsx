import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    
    const { name, flags, population, area, cca3 } = country;
    
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className="country">
            <h3>Country : {name?.common}</h3>
            <img src={flags.png} alt="" className='height' />
            <p>Population : {population }</p>
            <p>Area : {area}</p>
            <p>Country Code : {cca3}</p>
            <button onClick={handleVisited}>{visited ?"Visited": "Going"}</button>
            {visited ? 'I have Visited' : 'I want to visit'}
        </div>
    );
};

export default Country;