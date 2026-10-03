import "./Item.css";
export const Item = ({ name, description, price, image, children }) => {
  return (
    <article className="card">
      <img src={image} alt={name} />
      <h3 className="product-title">{name}</h3>
      <p className="description">{description}</p>
      <p className="price">${price}</p>
      {/*Dejo un children para reutilizar este elemento*/}
      {children}
    </article>
  );
};
