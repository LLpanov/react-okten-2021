import {Route, Routes} from "react-router-dom";

import './App.css';
import {Layout} from "./components";
import {HomePage} from "./Pages";

const App = () => {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}/>
                <Route  path={'home'} element={<HomePage/>}>
                </Route>


                <Route/>
            </Routes>
        </div>
    );
};

export default App;