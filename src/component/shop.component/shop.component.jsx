import products from "../data.component/data.component";
import "./shop.style.css";

const Shop = () => {
  console.log(products);
  return (
    <div>
      <div className="products">
        {products.map((data) => {
          return (
            <div className="product-card" key={data._id}>
              <img src={data.image} alt={data.name} className="product-image" />
              <h4>{data.name}</h4>
              <div className="product-card-details">
                <span>RS.{data.price}</span>
                <span>{data.rating}</span>
              </div>
              <button className="ProductCard-button">Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
