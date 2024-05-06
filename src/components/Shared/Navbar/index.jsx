import React from "react";

const Navbar = ({ quantity }) => {

    return (
        <nav className="sticky top-0 right-0 h-10 bg-white flex w-full justify-end">
            <button className="flex"><p> Cart </p><p className="text-red-500">{quantity}</p></button>
        </nav>
    )
}


export default Navbar;