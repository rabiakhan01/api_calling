import React from "react";
import Layout from "../../../utils/Layout";


const Loader = () => {
    return (
        <Layout>
            <div className="flex h-lvh justify-center items-center">
                <div className="animate-spin size-10 border-4 border-current border-t-transparent rounded-full text-secondaryColor">
                </div>
            </div>
        </Layout>
    );
}

export default Loader;