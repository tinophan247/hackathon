// import './App.css'

// import { useState } from "react";
import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ListProduct from "./components/ListProduct";
// import { useEffect } from "react";

function App() {
  // const [cart, setCart] = useState([]);
  const cartList = JSON.parse(localStorage.getItem("cart")) || [];
  const [qt, setQt] = useState(1);

  const handleChange = (e) => {
    setQt(e.target.value);
  };

  const handleAddtoCart = (item) => {
    let newCart = [...cartList, { ...item, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(newCart));
    location.reload();
  };

  const increaseQuantity = (item, index) => {
    cartList.splice(index, 1, { ...item, quantity: item.quantity + 1 });
    let newCart = cartList;
    localStorage.setItem("cart", JSON.stringify(newCart));
    location.reload();
  };

  const decreaseQuantity = (item, index) => {
    cartList.splice(index, 1, {
      ...item,
      quantity: item.quantity == 1 ? 1 : item.quantity - 1,
    });
    let newCart = cartList;
    localStorage.setItem("cart", JSON.stringify(newCart));
    location.reload();
  };

  const removeItem = (item, index) => {
    cartList.splice(index, 1);
    let newCart = cartList;
    localStorage.setItem("cart", JSON.stringify(newCart));
    location.reload();
  };

  // Function to calculate total price
  function calculateTotalPrice(items) {
    var totalPrice = 0;

    // Iterate over each object and calculate the subtotal
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      totalPrice += item.quantity;
    }

    return totalPrice;
  }

  // Calculate and display the total price
  var totalItem = calculateTotalPrice(cartList);
  // console.log("Total Price: " + total);

  return (
    <div className="bg-[#E5E5E5] h-auto">
      <Header />
      <ListProduct
        qt={qt}
        handleChange={handleChange}
        handleAddtoCart={handleAddtoCart}
      />
      <Cart
        cartList={cartList}
        total={totalItem}
        removeItem={removeItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
}

export default App;
