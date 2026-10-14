import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Restablezco loading y errors al comenzar cada búsqueda, para evitar
    //conservar un error o mostrar resultados anteriores durante el cambio
    //de categoría.
    setLoading(true);
    setErrors(null);
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los productos");
        }
        return res.json();
      })
      .then((data) => {
        if (category) {
          const filteredProducts = data.filter(
            (product) =>
              product.category.toLowerCase() === category.toLowerCase(),
          );
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, [category]);
  if (loading) return <p>Cargando productos...</p>;
  if (errors) return <p>{errors}</p>;

  return (
    <section>
      <h1>Productos</h1>
      <ItemList products={products} />
    </section>
  );
};
