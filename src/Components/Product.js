const Product = ({ name, weight, weightSymbol }) => (
  <div className="product">
    <div className="product__name">{name}</div>
    <div className="product__weight">{weight}</div>
    <div className="product__symbol">{weightSymbol}</div>
  </div>
);
export default Product;
