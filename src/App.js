import {Route, Routes} from "react-router-dom";

import {Layout, MovieDetails} from "./components";

import "./App.scss";
import {HomePage} from "./Pages";

const App = () => {


    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movie/:id'} element={<MovieDetails/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;