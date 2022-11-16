import { createContext, useState } from "react";

const CartContext = createContext();


function CartProvider ({children}){
    const [cart,setCart] = useState([]);

    const addProduct = (item, newQuantity)=> {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({...item,quantity: newQuantity})
        setCart(newCart);
    }
    console.log(cart)

    const clearCart = () => {
        setCart([])      
    }

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }

    const totalPrice = () => {
        return cart.reduce((prev,act) => prev + act.quantity * act.precio, 0);
    }

    const totalProduct = () => {
        return cart.reduce((acumulador,productoActual) => acumulador + productoActual.quantity,0);
    }


    return <CartContext.Provider value={{addProduct, totalPrice, totalProduct , clearCart, isInCart, removeProduct,cart}}>{children} </CartContext.Provider>
   
}



export {CartProvider};
export default CartContext