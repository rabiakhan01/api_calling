import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditUser from "../pages/EditUser";
import ShoppingListing from "../pages/ShoppingListing";
import Cart from "../pages/Cart";

const Route = ({ addToCart, cartLength }) => {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <ShoppingListing
                addToCart={addToCart}
                cartLength={cartLength}
            />
        },
        {
            path: '/edit-user/:userId',
            element: <EditUser />
        },
        {
            path: '/cart',
            element: <Cart
                cartLength={cartLength}
            />
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Route;