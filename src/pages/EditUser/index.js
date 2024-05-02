import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../utils/Layout";
import { Loader } from "../../components/Shared";

const EditUser = () => {
    const { userId } = useParams();
    const endpoint = 'https://reqres.in/api/users/';
    const [user, setUser] = useState({
        email: '',
        first_name: '',
        last_name: ''

    });

    const isEmpty = Object.values(user).every(x => x === '');

    const getSingleDetail = async () => {
        const response = await axios.get(endpoint + userId)
        const result = response.data.data;
        setUser(result);
        //console.log("single user", result);
    }

    useEffect(() => {
        getSingleDetail();
    }, []);

    const handelChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handelUpdateUser = (event) => {
        event.preventDefault();
        console.log("updated user", user);
        axios.put(endpoint + userId, user)
            .then((response) => console.log("updated single detail", response))
            .catch((error) => console.log("Put request error", error))
    }

    if (isEmpty) {
        return (
            <Loader />
        )
    }
    else {
        return (
            <Layout>
                <div className="h-lvh  flex flex-col justify-center items-center">
                    <h1 className="text-center text-2xl font-bold mb-5">Edit User</h1>
                    <form className="flex flex-col gap-5">
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handelChange}
                            className="border border-secondaryColor px-4 py-2 rounded-md"
                        />
                        <input
                            type="text"
                            name="first_name"
                            value={user.first_name}
                            className="border border-secondaryColor px-4 py-2 rounded-md"
                            onChange={handelChange}
                        />
                        <input
                            type="text"
                            name="last_name"
                            value={user.last_name}
                            className="border border-secondaryColor px-4 py-2 rounded-md"
                            onChange={handelChange}
                        />
                        <button type="submit" className="flex justify-center items-center bg-secondaryColor py-2 rounded-md" onClick={handelUpdateUser}>Update User</button>
                    </form>
                </div>
            </Layout>
        )
    }
}

export default EditUser;