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

  // const [cart, setCart] = useState({});


  const addItem = useCallback((index, item) => {
    console.log(index)
    console.log(item.name)
  }, [])

  return (
    <div className="App">
      <h1>Andres' Bakery</h1> 
      {bakeryData.map((item, index) => ( 
        <BakeryItem item={item} index={index} addItem={addItem} key={index}/>
      ))}
 
      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <h2> Total Price: $</h2>
      </div>
    </div>
  );
}

export default App;
