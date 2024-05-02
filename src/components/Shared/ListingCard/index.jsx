import React from "react";

const ListingCard = ({ item_name, item_description, item_price, children }) => {
    return (
        <div className="flex flex-col gap-1">
            <p>{item_name}</p>
            <p>{item_description}</p>
            <p>{item_price}</p>
            <p>{children}</p>
        </div>
    );
}

export default ListingCard;