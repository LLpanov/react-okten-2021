import React, {useEffect, useState} from 'react';
import Space from "./Space";

const Spacex = () => {
    const [fligtsList,setFlyList] = useState([]);
    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(flights => {
                setFlyList(flights.filter(flights => flights.launch_year !== '2020'));



            });
    },[]);

    return (
        <div className={'box'}>
            {fligtsList.map(value => <Space key={value.flight_number} name={value.mission_name}
               year={value.launch_year} pic={<img src={value.links.mission_patch_small} alt="ships"/>}
            />)}
        </div>
    );
};

export default Spacex;