import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reseteo los estados antes de realizar una nueva búsqueda,
    // para evitar mostrar información del producto anterior.
    setItemDetail(null);
    setError(null);
    setLoading(true);

    fetch("/data/products.json")
      .then((res) => {
        //Si el fetch recibe algo problematico, tambien entra en catch
        if (!res.ok) {
          throw new Error("Error al cargar los productos");
        }
        return res.json();
      })
      .then((data) => {
        const item = data.find((product) => product.id === id);
        if (item) {
          setItemDetail(item);
          return;
        }
        throw new Error("Producto no encontrado");
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);
  // Early returns para manejar los estados de carga y error, o no se encuentra el producto.
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!itemDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h1>Detalles del producto</h1>
      <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};
