import {useContext} from "react";
import {ShopContext} from "../../context/shopContext";

export const Product = (props) => {

    const {cartItem, addToCart, removeFromCart} = useContext(ShopContext);

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 text-center">
                <img className="img-cover" style={{width:"100%", height:"15vw"}} src={props.product.productImage}/>
                <div className="card-body">
                    <h3 className="card-title">{props.product.productName}</h3>
                    <p className="card-text">price : {props.product.price}$</p>
                    <a className="btn btn-info" onClick={() => addToCart(props.product.id)}>+</a>
                    <span className="mx-2">{cartItem ? (cartItem.filter((cart) => cart.id === props.product.id)[0]?.count) : 0}</span>
                    {cartItem.find((product) => product.id === props.product.id)
                    && <a className="btn btn-info" onClick={() => removeFromCart(props.product.id)}>-</a>}
                </div>
            </div>
        </div>
    )
}


