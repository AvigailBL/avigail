import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Product from './Product';
import ContactUs from './ContactUs';
import ProductDBiger from './ProductDBiger';
import ShoppingBasket from './shoppingBasket';


export const Routing = ({ products, addCart, myCart, lessFromCart }) => {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Product" element={<Product products={products} addCart={addCart} />} />
            <Route path="/ProductDBiger/:name/:descibe/:size/:price/:img" element={<ProductDBiger />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="ShoppingBasket" element={<ShoppingBasket myCart={myCart} lessFromCart={lessFromCart}/>} />

        </Routes>
    );
};


