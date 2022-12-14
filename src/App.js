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

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = useCallback((index, item) => {
    const newItem = {index: index, name: item.name, price: item.price, count: 1}
    let duplicateItem = false;
    const newCart = cart.map(item => {


      if (item.index === index) {
        const oldCount = item.count
        duplicateItem = true;
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

  const clearCart = () => {
    setCart([])
    setTotalPrice(0)
  }

  return (
    <div className="App">
      <div className="LeftContainer">
      <h1>Andres' Bakery</h1> 
      <div className="BakeryItemsContainer">
      {bakeryData.map((item, index) => (
        <div className="BakeryItem">
        <BakeryItem item={item} index={index} addItem={addItem} key={index}/>
        </div>
      ))}
      </div>
      </div>
      <div className="RightContainer">
        <h1>My Cart</h1>
        <button onClick={clearCart}> Clear cart</button>
        <h2> Total Price: ${totalPrice.toFixed(2)}</h2>
        {cart.map((item) => (
          <h3> {item.count}x {item.name}</h3>
        ))}
      </div>
    </div>
  );
}

export default App;
