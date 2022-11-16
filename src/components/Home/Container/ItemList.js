import { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";
import Loader from "./Spinner";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore'

function ItemList(){

    const [cards, setCards] = useState(<Loader/>);
    const { cat } = useParams();
    const [loading, isLoading] = useState(false)

    useEffect(() => {
    const db = getFirestore()
    const docRef = cat ? query(collection(db, 'items'), where("categoria", "==", cat)) : collection(db, 'items'); 
    
    getDocs(docRef)
      .then((snapshot) => {
      setCards(snapshot.docs.map((doc)=> ({id:doc.id, ...doc.data()})));
            isLoading(true);
      })
    }, [cat]);
    

      return ( 
          <div className="d-flex flex-wrap justify-content-around">
        {!loading ? cards
          : cat ? cards
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