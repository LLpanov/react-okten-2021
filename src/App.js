import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Car, Cat, Dog, Girl, Layout, Notebook} from "./components";


const App = () => {

    return (
        <div className={'Container'}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'car'} element={<Car/>}/>
                    <Route path={'cat'} element={<Cat/>}/>
                    <Route path={'dog'} element={<Dog/>}/>
                    <Route path={'girl'} element={<Girl/>}/>
                    <Route path={'notebook'} element={<Notebook/>}/>
                </Route>
            </Routes>

        </div>
    );

};

export default App;