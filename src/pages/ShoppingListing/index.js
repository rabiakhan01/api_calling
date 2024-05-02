import React, { useContext } from "react";
import Layout from "../../utils/Layout";
import staticData from "../../utils/staticData";
import { ListingCard } from "../../components/Shared";
import { Context } from "../../App";


const ShoppingListing = () => {

    const { addToCart } = useContext(Context);

    return (
        <Layout>
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
                                                    <button className="flex px-2 py-1 bg-secondaryColor rounded-md" onClick={addToCart}>add to cart</button>
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