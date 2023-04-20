import products from "../data.component/data.component";

const Shop = () => {
  console.log(products);
  return (
    <div>
      <div className="products">
        {products.map((data) => {
          return (
            <div className="name" key={data._id}>
              {" "}
              {data.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
