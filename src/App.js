import {Route, Routes, Navigate} from "react-router-dom";

import {Layout} from "./components";
import {
    AlbumsPage, PhotosPage,
    PostCommentsPage,
    PostPage,
    PostsDetailsPage,
    UserDetailsPage,
    UserPostsPage,
    UsersPage
} from "./pages";


const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'users'}/>}/>

                <Route path={'users'} element={< UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<UserPostsPage/>}/>
                    </Route>

                    <Route path={':id/albums'} element={<AlbumsPage/>}>
                        <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={< PostPage/>}>
                    <Route path={':id'} element={<PostsDetailsPage/>}>
                        <Route path={'comments'} element={< PostCommentsPage/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
};

export default App;