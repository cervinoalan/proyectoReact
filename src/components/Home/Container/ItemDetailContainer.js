import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductoById } from "./producto"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer () {
 const {idProducto} = useParams();
 const [producto,setProducto] = useState({});

 const getImages = () => {
  setTimeout(() => {
    setProducto(getProductoById(idProducto));
  }, 2000);
};


useEffect(() => {
  getImages();
},[]);

  return(
    
      <div>
        <br/>
        <br/>
        <ItemDetail
         key={producto.id}
         id={producto.id}
         categoria={producto.categoria}
         nombre={producto.nombre}
         imagen={producto.imagen}
         precio={producto.precio}
         cantidad={producto.cantidad}
       />
      </div>
    )
}

export default ItemDetailContainer;