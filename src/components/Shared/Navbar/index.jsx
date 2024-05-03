import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ cartLength }) => {
    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate("/cart")
    }
    return (
        <nav className="flex w-full justify-end">
            <button className="flex" onClick={navigateToCart}><p>Cart </p><p className="text-red-500">{cartLength}</p></button>
        </nav>
    )
}


export default Navbar;