import "../styles/Product.css";

const Product = (props) => {
  return (
    <div className="product_container">
      <div className="product">
        <img className="product_image" src={props.image} alt="Coffee" />
      </div>
      <div className="information_block">
        <h2 className="product_name">{props.title}</h2>
        <h3 className="type">{props.type} </h3>
        <h4 className="description">{props.description}</h4>
      </div>
    </div>
  );
};

export default Product;
