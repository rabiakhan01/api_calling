import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditUser from "../pages/EditUser";
import Listing from "../pages/Listing";

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Listing />
        },
        {
            path: '/edit-user/:userId',
            element: <EditUser />
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Route;