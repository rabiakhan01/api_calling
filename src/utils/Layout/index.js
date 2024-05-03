import React from "react";
import { Navbar } from "../../components/Shared";

const Layout = ({ children, quantity }) => {

    return (

        <div className='flex flex-col justify-center items-center mx-5 sm:mx-10 lg:mx-16 xl:mx-20 2xl:max-w-[1200px] 2xl:my-0 2xl:mx-auto'>
            <Navbar
                quantity={quantity}
            />
            {children}
        </div>

    )
}

export default Layout;