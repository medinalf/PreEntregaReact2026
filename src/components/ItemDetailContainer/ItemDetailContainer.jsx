import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Renderizo los componentes de detalle del producto,
    // reseteando los estados para que no se muestren datos de productos anteriores
    // mientras se carga el nuevo producto.
    setItemDetail(null);
    setError(null);
    setLoading(true);

    fetch("/data/products.json")
      .then((res) => res.json())
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
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!itemDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h1>Detalles del producto</h1>
    </section>
  );
};
