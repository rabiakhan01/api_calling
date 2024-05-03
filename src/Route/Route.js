import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditUser from "../pages/EditUser";

import ShoppingListing from "../pages/ShoppingListing";
import Cart from "../pages/Cart";

const Route = ({ quantity, addToCart }) => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <ShoppingListing
                quantity={quantity}
                addToCart={addToCart}
            />
        },
        {
            path: '/edit-user/:userId',
            element: <EditUser />
        },
        {
            path: '/cart',
            element: <Cart />
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Route;