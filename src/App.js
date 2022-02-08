import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import {Layout} from "./components";
import {GenrePage, HomePage} from "./Pages";

const App = () => {


    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                    <Route path={'genre'} element={<GenrePage/>}/>

                </Route>
            </Routes>
        </>
    );
};

export default App;