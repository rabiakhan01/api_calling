import React, { useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import staticData from "../../utils/staticData";
import { ListingCard } from "../../components/Shared";

const ShoppingListing = ({ cartArray, setCartArray, setCartItemQuantity, setTotalBil }) => {

    const [addCartItem, setAddCartItem] = useState({
        id: 0,
        item_name: '',
        item_price: '',
        item_description: '',
        item_quantity: 0,
    });

    const handelAddToCart = (id, name, description, price, quantity) => {


        const cartData = {
            ...addCartItem,
            id: id,
            item_name: name,
            item_price: price,
            item_description: description,
            item_quantity: quantity + 1
        }


        const existItem = cartArray.find(item => item.item_name === cartData.item_name);

        if (!existItem) {
            setAddCartItem(cartData);
            setCartArray([...cartArray, cartData]);
            setCartItemQuantity(prevQunatity => prevQunatity + 1);
            setTotalBil((prevQunatity => prevQunatity + price));
        }

    }

    return (
        <div className="flex flex-col w-full">
            <h1 className="text-secondaryColor text-2xl mb-5 ">Listing</h1>
            {
                staticData.map((item, index) => {
                    return (
                        <div key={item.id} className="mb-3 border border-secondaryColor w-1/2 p-5">
                            <ListingCard
                                item_name={item.item_name}
                                item_description={item.item_description}
                                item_price={item.item_price}
                            >
                                <button
                                    className="flex px-2 py-1 rounded-md bg-secondaryColor"
                                    onClick={() => handelAddToCart(index, item.item_name, item.item_description, item.item_price, item.item_quantity)}
                                >
                                    add to cart
                                </button>
                            </ListingCard>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default ShoppingListing;