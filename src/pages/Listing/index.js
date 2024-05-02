import React, { useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Shared";
import Modal from "../../components/Shared/Modal";
import images from "../../assets/images/images";
const Listing = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [userId, setUserId] = useState();

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

    // update the state only one time
    useEffect(() => {
        addNewUser();
        getUserListing();
    }, [])

    // Edit the user using API
    const handelEditUser = async (userId) => {
        navigate(`/edit-user/${userId}`)
    }

    const handelDeleteUser = (id) => {
        setShowModal(true);
        setUserId(id);
    }


    //handel show modal

    const handelShowModal = () => {
        setShowModal(false)
    }

    //delete single user

    const deleteSingleUser = () => {
        const response = axios.delete(endpoint + userId)
            .then((response) => console.log(`user ${userId} deleted sucessfully: `, response))
            .catch((error) => console.log("error in deleting", error));
        setShowModal(false);
    }

    // map the data recieved from API get
    const user = users.map((user) => {
        return (
            <tr key={user.id}>
                <td className="border border-secondaryColor">{user.id}</td>
                <td className="border border-secondaryColor">{user.email}</td>
                <td className="border border-secondaryColor">{user.first_name + ' ' + user.last_name}</td>
                <td className="flex gap-2 border border-secondaryColor py-1 px-2">
                    <button className="bg-secondaryColor w-16 h-8" onClick={() => handelEditUser(user.id)}>Edit</button>
                    <button className="bg-secondaryColor w-16 h-8" onClick={() => handelDeleteUser(user.id)}>Delete</button>
                </td>
            </tr>
        )
    })

    if (user.length > 0) {
        return (
            <Layout>
                <div className={`flex flex-col h-lvh w-full justify-center items-center ${showModal ? 'blur-[2px]' : ''} `}>
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
                <div className="relative flex justify-center items-center -mt-[35rem]">
                    {
                        showModal &&
                        <Modal>
                            <div className="flex justify-end m-5">
                                <img src={images.close} alt="" className="w-4 h-4 cursor-pointer" onClick={handelShowModal} />
                            </div>
                            <div className="w-full ml-5">
                                <p>Do you want to delete user ?</p>
                            </div>
                            <div className="flex gap-5 justify-end mr-5">
                                <button className="flex h-10 w-16 bg-transparent border border-zinc-200 justify-center items-center rounded-md" onClick={handelShowModal}>Cancel</button>
                                <button className="flex h-10 w-16 bg-secondaryColor border border-zinc-200 justify-center items-center rounded-md" onClick={deleteSingleUser}>Delete</button>
                            </div>

                        </Modal>
                    }
                </div>
            </Layout>
        );
    }
    else {
        return <Loader />
    }

}

export default Listing;