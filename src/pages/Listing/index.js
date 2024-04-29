import React, { useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import axios from "axios";

const Listing = () => {

    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        //return a promiss which has methods to handel the returned value
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=30');
            const result = await response.json();
            console.log(response);
            console.log(result);

        } catch (error) {
            console.log('failed to fetch the data')
        }
    }

    fetchData();
    const post = posts.map((post) => {
        return (
            <tr key={post.id}>
                <td className="border border-secondaryColor">{post.id}</td>
                <td className="border border-secondaryColor">{post.title}</td>
                <td className="border border-secondaryColor">{post.body}</td>
            </tr>
        )
    })
    return (
        <Layout>
            <div className="flex flex-col w-full justify-center items-center">
                <h1 className="text-3xl font-bold mb-10">Post Data</h1>
                <table className="text-center border border-secondaryColor">
                    <thead className="">
                        <tr className="text-secondaryColor">
                            <th className=" text-nowrap px-5 border border-secondaryColor">Post ID</th>
                            <th className="px-5 border border-secondaryColor">Post Title</th>
                            <th className="border border-secondaryColor">Description</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {post}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default Listing;