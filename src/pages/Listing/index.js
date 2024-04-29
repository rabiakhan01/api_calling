import React, { useEffect, useState } from "react";
import Layout from "../../utils/Layout";
const Listing = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((result) => result.json())
            .then((result) => setPosts(result))
    }, []);

    const tableData = posts.map((post) => {
        return (
            <tr>

            </tr>
        )
    })
    return (
        <Layout>
            <div className="flex h-lvh w-full">
                <table className="">
                    <tr>
                        <th className="text-amber-400">Post ID</th>
                        <th>Post Title</th>
                        <th>Description</th>
                    </tr>
                </table>
            </div>
        </Layout>
    );
}

export default Listing;