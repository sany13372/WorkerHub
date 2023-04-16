import React, {useMemo} from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import MainLayout from "@layouts/MainLayout";
import NotFoundPage from "@pages/notFoundPage/notFoundPage";
import HomePage from "@pages/HomePage/HomePage";
import ChatsPage from "@pages/Chats/Chats";
import AuthPage from "@pages/Auth/AuthPage";

function Router() {
    const rooter = useMemo(() => {
        return createBrowserRouter(
            createRoutesFromElements(
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                        {/* ========= home ========= */}
                        <Route path="*" element={<NotFoundPage/>}/>
                        <Route path={'/chats'} element={<ChatsPage/>}/>
                    <Route path={'/auth'} element={<AuthPage/>}/>
                </Route>
            )
        );
    }, []); // eslint-disable-line

    return <RouterProvider router={rooter}/>;
}

export default Router;
