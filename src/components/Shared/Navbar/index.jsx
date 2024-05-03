import React from "react";


const Navbar = ({ quantity }) => {

    return (
        <nav className="flex w-full justify-end">
            <button className="flex"><p>Cart </p><p className="text-red-500">{quantity}</p></button>
        </nav>
    )
}


export default Navbar;