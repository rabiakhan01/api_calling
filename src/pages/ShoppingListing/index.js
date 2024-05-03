import React, { useState } from "react";
import Layout from "../../utils/Layout";
import staticData from "../../utils/staticData";
import { ListingCard } from "../../components/Shared";


const ShoppingListing = ({ addToCart, cartLength }) => {
    const [cartItem, setCartItem] = useState({
        id: 0,
        item_id: '',
        item_name: '',
        item_price: '',
        item_description: '',
    })


    const handelAddToCart = (parent_id, name, description, price) => {

        const cartData = {
            ...cartItem,
            id: Math.floor(Math.random() * 1000),
            item_id: parent_id,
            item_name: name,
            item_price: price,
            item_description: description
        }
        setCartItem(cartData);
        addToCart(cartData)

    }


    return (
        <Layout
            cartLength={cartLength}
        >
            <div className="flex flex-col w-full">
                {
                    staticData.map((product) => {
                        return (
                            <div key={product.id} className="mb-10">
                                <h1 className="text-2xl text-secondaryColor mb-3">{product.name}</h1>
                                {
                                    product.items.map((item) => {
                                        return (
                                            <div key={item.id} className="mb-3 border border-secondaryColor w-1/2 p-5">
                                                <ListingCard
                                                    item_name={item.item_name}
                                                    item_description={item.item_description}
                                                    item_price={item.item_price}
                                                >
                                                    <button className="flex px-2 py-1 bg-secondaryColor rounded-md" onClick={() => handelAddToCart(item.id, item.item_name, item.item_description, item.item_price)}>add to cart</button>
                                                </ListingCard>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export default ShoppingListing;