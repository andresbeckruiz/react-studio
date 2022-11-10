function CartItem(props) {

    const {image, name, description, price} = props.item
  
    return (
      <div>
        <h3> {name} </h3>
        <h3> ${price} </h3>
      </div>
    );
  }
  
  export default CartItem;