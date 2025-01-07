function ShoppingBasket({ myCart, lessFromCart }) {
    return (
      <>
        <h1>העגלה שלי</h1>
        {myCart.length === 0 ? (
          <p>העגלה ריקה</p>
        ) : (
          <ul>
            {myCart.map((item) => (
              <li key={item.code}>
                {item.name} - {item.price} ש"ח
                <button onClick={() => lessFromCart(item.code)}>הסר</button>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
  
  export default ShoppingBasket;
  