import {Products} from "../../data/products";
import {useContext} from "react";
import {ShopContext} from "../../context/shopContext";
import {Product} from "../shop/product";

export const Cart = () => {

    const {cartItem} = useContext(ShopContext);

    return (
        <div className="container">
            <h1 className="text-center display-3 mb-5">cart</h1>
            <div className="row">
                {Products.map((product) => (
                    cartItem.map((item) => {
                        if (item.id === product.id && item.count > 0) {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        }
                    })
                ))}
            </div>
        </div>
    )
}