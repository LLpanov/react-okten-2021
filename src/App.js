import './index.css';
import {Cars, Form} from "./components";
import {useState} from "react";

const App = () => {
    const [newCar, setNewCar] = useState(null);
    const [carChange, setCarChange] = useState({});



    return (
        <div className={'Target'}>
            <Form update={setNewCar} carChange={carChange}/>
            <Cars newCar={newCar} update={setNewCar} change={setCarChange}/>

        </div>
    );
};

export default App;