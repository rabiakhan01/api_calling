import React, { useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import { ListingCard } from "../../components/Shared";
import { handelCart } from "../../utils/utils";

const Cart = ({ cartLength }) => {

    const [cartItem, setCartItem] = useState(handelCart())

    return (
        <Layout
            cartLength={cartLength}
        >
            <div className="flex flex-col w-1/2">
                <h1 className="text-2xl text-secondaryColor my-5 ml-5">Cart</h1>
                {
                    cartItem.map((item, index) => {
                        return (
                            <div className="flex flex-col justify-start items-start border border-secondaryColor mb-5 ml-5 p-3" key={index}>
                                <ListingCard
                                    item_name={item.item_name}
                                    item_description={item.item_description}
                                    item_price={item.item_price}
                                />
                                <button className="flex px-2 py-1 bg-secondaryColor rounded-md m-5">Remove from cart</button>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default Cart;