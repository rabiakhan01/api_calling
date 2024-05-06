import React, { useEffect, useState } from "react";
import { ListingCard } from "../../components/Shared";


const Cart = ({ cartArray, setCartArray, totalBil, setTotalBil }) => {

    // increment the qunatity for every item when it increase
    const incItemQuantity = (item_name, item_price) => {

        const newTotal = totalBil + item_price
        setTotalBil(newTotal)

        const existItem = cartArray.find(item => item.item_name === item_name);

        if (existItem) {
            let newItem;
            setCartArray(prevState => {
                newItem = prevState.map(item => {
                    if (item.item_name == existItem.item_name) {
                        return { ...existItem, item_quantity: existItem.item_quantity + 1 };
                    }
                    return item;
                });
                return newItem;

            })
        }

    }

    //decrement from the quantity if user wants to decrease the specific item quantity
    const decItemQuantity = (item_name, index, item_quantity, item_price) => {

        const newTotal = totalBil - item_price;
        setTotalBil(newTotal);

        if (item_quantity <= 1) {
            cartArray.splice(index, 1);
            const updatedCart = cartArray;
            setCartArray([...updatedCart]);
        }

        else {
            const foundedItem = cartArray.find(item => item.item_name === item_name);
            if (foundedItem) {
                let newItem;
                setCartArray(prevState => {
                    newItem = prevState.map(item => {
                        if (item.item_name == foundedItem.item_name) {
                            return { ...foundedItem, item_quantity: foundedItem.item_quantity - 1 };
                        }
                        return item;
                    });
                    return newItem;

                })
            }
        }
    }

    return (

        <div className="flex flex-col w-full">
            <h1 className="text-2xl text-secondaryColor my-5 ">Cart</h1>
            {
                cartArray.map((item, index) => {
                    return (
                        <div className="flex flex-col w-1/2 justify-start items-start border border-secondaryColor mb-5 p-3" key={index}>
                            <ListingCard
                                item_name={item.item_name}
                                item_description={item.item_description}
                                item_price={item.item_price}
                            />
                            <div className="flex bg-secondaryColor rounded-md m-5">
                                <button className="flex text-2xl border border-r-2 border-y-transparent border-l-transparent w-6 justify-center items-center h-10" onClick={() => decItemQuantity(item.item_name, index, item.item_quantity, item.item_price)}>-</button>
                                <button
                                    className="flex h-10 w-14 justify-center items-center"
                                >Qty {item.item_quantity}
                                </button>
                                <button className="flex text-2xl border border-l-2 border-y-transparent border-r-transparent w-6 justify-center items-center h-10" onClick={() => incItemQuantity(item.item_name, item.item_price)}>+</button>
                            </div>
                        </div>
                    )
                })
            }
            <p>Total Amount: <span>
                {
                    totalBil
                }
            </span>
            </p>
        </div>
    )
}

export default Cart;