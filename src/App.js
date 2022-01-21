import {Route, Routes} from "react-router-dom";

import PostsPage from "./pages/PostsPage/PostsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import PostDetails from "./components/PostDeatails/PostDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import PostCommentsPage from "./pages/PostCommentsPage/PostCommentsPage";
import UsersPostsPage from "./pages/UsersPostPage/UsersPostsPage";

const App = () => {
    return (
        <>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UsersPostsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>


        </>

    )
        ;
};

export default App;