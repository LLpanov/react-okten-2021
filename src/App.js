import "./App.css";
import {Cars, Form} from "./components";


const App = () => {

    return (
        <div className={'WrapApp'}>
            <Form/>
            <Cars/>
        </div>
    );
};

export default App;