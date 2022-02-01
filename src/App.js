import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {CarsPage, CommentsPage, PostsPage, UsersPage} from "./pages";
import "./App.css"


const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>

            </Route>
        </Routes>
    );
};

export default App;