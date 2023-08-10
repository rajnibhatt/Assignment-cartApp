import { Route, Routes } from 'react-router-dom';
import './App.css';
import "rsuite/dist/rsuite.min.css";
import Category from './Pages/Category';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';
import { CartProvider } from './Component/cart/Cart.Context';

const  App = () => {
  return (
    <>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
    </>
  );
}

export default App;
