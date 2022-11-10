import "./App.css";
import { useState, useCallback } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = useCallback((index, item) => {
    const newItem = {index: index, name: item.name, price: item.price, count: 1}
    let duplicateItem = false;
    const newCart = cart.map(item => {


      if (item.index === index) {
        const oldCount = item.count
        duplicateItem = true;
        console.log("Duplicate found!");
        return {...item, count: oldCount + 1}
      }

      return item
    })

    if (!duplicateItem) {
      setCart([...cart, newItem])
    } else {
      setCart(newCart)
    }

    setTotalPrice(totalPrice + item.price)
  }, [cart, totalPrice])

  return (
    <div className="App">
      <h1>Andres' Bakery</h1> 
      {bakeryData.map((item, index) => ( 
        <BakeryItem item={item} index={index} addItem={addItem} key={index}/>
      ))}
 
      <div>
        <h2>Cart</h2>
        {cart.map((item) => (
          <h3> {item.count}x {item.name}</h3>
        ))}
        <h2> Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default App;
