import {useState, createContext} from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState([]);

    const addToCart = (itemId) => {
        let Cart = cartItem.find((item) => (item.id === itemId))

        if(Cart) {
            setCartItem(cartItem.map((item) => {
                if(item.id === itemId) {
                    return {id: item.id, count: item.count + 1};
                }
                else return item;
            }));
        }
        else {
            setCartItem([...cartItem, {id: itemId, count: 1}]);
        }

        console.log(cartItem)
    }

    const removeFromCart = (itemId) => {
        setCartItem(cartItem.map((item) => {
            if(item.id === itemId) {
                return {...item, count: (item.count === 0 ? 0 :item.count - 1)};
            }
            return item;
        }))
        console.log(cartItem)

    }
    const contextValues = {cartItem, addToCart, removeFromCart}
    return (
        <ShopContext.Provider value={contextValues}>{props.children}</ShopContext.Provider>
    )
}
