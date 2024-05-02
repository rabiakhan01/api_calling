import React from "react";
import images from "../../../assets/images/images";

const Modal = ({ children }) => {
    return (
        <div className="flex flex-col gap-y-5 w-96 md:w-[30rem] h-48 outline outline-1 outline-secondaryColor bg-slate-50 rounded-md">
            {children}
        </div>
    );
}

export default Modal;