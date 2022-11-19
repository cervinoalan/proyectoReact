import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //Agreugar producto con la cantidad
  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setCart(newCart);
  };
  console.log(cart);
  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };
  //Buscar id producto
  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false;
  };
  // Remover producto seleccionado
  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  // Suma total del precio
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0);
  };
  // Suma cantidad de productos
  const totalProduct = () => {
    return cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        addProduct,
        totalPrice,
        totalProduct,
        clearCart,
        isInCart,
        removeProduct,
        cart,
      }}
    >
      {children}{" "}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;
