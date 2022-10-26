import { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import productoApi from "./producto";

function ItemList(){

    const [cards, setCards] = useState([]);
    const { cat } = useParams();

    const getImages = () => {
        setTimeout(() => {
          const items = productoApi;
          setCards(items);
        }, 1500);
      };
    
      useEffect(() => {
        getImages();
      }, []);
    

      return ( 
          <div className="d-flex flex-wrap justify-content-around">
        {cat
          ? cards
              .filter((producto) => producto.categoria === cat)
              .map((producto) => (
                <Item 
                key={producto.id}
                id={producto.id}
                categoria={producto.categoria}
                nombre={producto.nombre}
                imagen={producto.imagen}
                precio={producto.precio}
                cantidad={producto.cantidad}
                />
              ))
          : cards
              .map((producto) => (
                <Item 
                key={producto.id}
                id={producto.id}
                categoria={producto.categoria}
                nombre={producto.nombre}
                imagen={producto.imagen}
                precio={producto.precio}
                cantidad={producto.cantidad}
                />
              ))}      
          </div>
      );
  }

export default ItemList;