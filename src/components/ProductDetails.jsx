import { Link } from "react-router-dom";

function ProductDetails({product, addCart }) {

    return  <>
    
        <h1>{product.name}</h1>
        <img src={"/IMG/" + product.img} />

        <Link to={"/ProductDBiger/"+product.name+"/"+product.img+"/"+product.descibe+"/"+product.price+"/"+product.price}> לפרטים נוספים</Link>
        <button onClick={() => addCart({ name: product.name, price: product.price })}> הוסף לסל</button>

        </>
}
export default ProductDetails;

