import React, { useContext } from "react";
import { Context } from "../../../App";

const Navbar = () => {

    const { quantity, addToCart } = useContext(Context);

    return (
        <nav className="flex w-full justify-end">
            <button className="flex" onClick={addToCart}><p>Cart </p><p className="text-red-500">{quantity}</p></button>
        </nav>
    )
}

export default Navbar;