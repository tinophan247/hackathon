/* eslint-disable react/prop-types */
import Product from "./Product";
import productList from "../../../products.json";

function ListProduct({handleAddtoCart, qt, handleChange}) {

  return (
    <div className="pl-20 grid grid-cols-4 mt-10 gap-10">
      {productList.length > 0 &&
        productList.map((item, index) => {
          return <Product item={item} key={index} handleAddtoCart={()=>{handleAddtoCart(item)}} qt={qt} handleChange={handleChange} />;
        })}
    </div>
  );
}

export default ListProduct;
