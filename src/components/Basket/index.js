import React, { useState } from "react";
import reactDom from "react-dom";

function Basket({count, }) {
    const [countBasket, setCountBasket] = useState();
    return (
        <div className="basket-info">
            Sepetteki Ürün Sayısı : {count} 
        </div>
    )
}

export default Basket 
