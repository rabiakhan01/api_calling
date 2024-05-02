import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditUser from "../pages/EditUser";
import Listing from "../pages/Listing";
import ShoppingListing from "../pages/ShoppingListing";

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <ShoppingListing />
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