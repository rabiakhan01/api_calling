import React, { useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Shared";

const Listing = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    //payload 
    const payload = {
        id: '13',
        email: '1234@gmail.com',
        first_name: 'adil',
        last_name: 'ali',
    }

    //end points
    const endpoint = 'https://reqres.in/api/users/';

    //get the representation of the specified end-point using get method
    const getUserListing = async () => {
        const response = await axios.get(endpoint);
        const result = response.data.data;
        setUsers(result);
        // console.log(result);
    }

    //post data on the specified end point
    const addNewUser = () => {
        axios.post(endpoint, payload)
            .then(response => {
                // console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        addNewUser();
        getUserListing();
    }, [])

    const handelEditUser = async (userId) => {
        console.log(userId)
        navigate(`/edit-user/${userId}`)
    }
    const user = users.map((user) => {
        return (
            <tr key={user.id}>
                <td className="border border-secondaryColor">{user.id}</td>
                <td className="border border-secondaryColor">{user.email}</td>
                <td className="border border-secondaryColor">{user.first_name + ' ' + user.last_name}</td>
                <td className="border border-secondaryColor py-1"><button className="bg-secondaryColor px-2 py-1" onClick={() => handelEditUser(user.id)}>Edit</button></td>
            </tr>
        )
    })

    if (user.length > 0) {
        return (
            <Layout>
                <div className="flex flex-col h-lvh w-full justify-center items-center">
                    <h1 className="text-3xl font-bold mb-10">Users</h1>
                    <table className="text-center border border-secondaryColor">
                        <thead>
                            <tr className="text-secondaryColor">
                                <th className=" text-nowrap px-5 border border-secondaryColor">User ID</th>
                                <th className="px-5 border border-secondaryColor">User Email</th>
                                <th className="px-5 border border-secondaryColor">First Name</th>
                                <th className="px-5 border border-secondaryColor">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user}
                        </tbody>
                    </table>
                </div>
            </Layout>
        );
    }
    else {
        return <Loader />
    }

}

export default Listing;