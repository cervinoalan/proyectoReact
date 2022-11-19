import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Spinner";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

function ItemDetailContainer() {
  const { nombre } = useParams();
  const [producto, setProducto] = useState(<Loader />);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = query(
      collection(db, "items"),
      where("nombre", "==", nombre)
    ); // tuve que filtrar con el nomnbre porque con el id no hacia el match

    getDocs(itemsCollection).then((snapshot) => {
      setProducto(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      isLoading(true);
    });
  }, [nombre]);

  return (
    <div className="d-flex flex-wrap justify-content-around mt-5">
      {!loading
        ? producto
        : producto.map((producto) => (
            <ItemDetail
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
export default ItemDetailContainer;
