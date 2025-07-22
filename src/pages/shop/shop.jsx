import {Products} from "../../data/products"
import {Product} from "./product";

export const Shop = () => {
    return (
        <div className="container">
            <h1 className="text-center display-3 mb-5">shop</h1>
            <div className="row">
               {Products.map((product) => (
                    <Product key={product.id} product={product} />
               ))}
           </div>
        </div>
    )
}