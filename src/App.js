import {Route, Routes} from "react-router-dom";
import useLocalStorage from "use-local-storage";
import {Layout, MovieDetails} from "./components";

import "./App.scss";
import {HomePage} from "./Pages";

const App = () => {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    const switchTheme = () => {
        const ChangeTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(ChangeTheme)
    }

    return (
        <div data-theme={theme}>
            <Routes>
                <Route path={'/'} element={<Layout switchTheme={switchTheme} theme={theme}/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movie/:id'} element={<MovieDetails/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;