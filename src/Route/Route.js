import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditUser from "../pages/EditUser";
import ShoppingListing from "../pages/ShoppingListing";
import Cart from "../pages/Cart";
import { handelCart } from "../utils/utils";

const Route = ({ addToCart }) => {

    const [cartLength, setCartLength] = useState(handelCart().length);

    const addNewItem = () => {

        setCartLength(prev => prev + 1);

    }

    const removeCartItem = () => {
        setCartLength(prev => prev - 1);
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <ShoppingListing
                addToCart={addToCart}
                addNewItem={addNewItem}
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
                removeCartItem={removeCartItem}
            />
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default Route;