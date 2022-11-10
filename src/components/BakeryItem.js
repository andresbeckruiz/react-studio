function BakeryItem(props) {

  const {image, name, description, price} = props.item

  return (
    <div>
      <img src={image} alt={`${name}`} width={300} height={200} /> 
      <h2> {name} </h2>
      <h3> {description} </h3>
      <h3> ${price} </h3>
      <button onClick={() => props.addItem(props.index, props.item)}> Add to Cart! </button>
    </div>
  );
}

export default BakeryItem;