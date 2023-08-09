import { Route, Routes } from 'react-router-dom';
import './App.css';
import "rsuite/dist/rsuite.min.css";
import Category from './Pages/Category';
import Checkout from './Pages/Checkout';
import Home from './Pages/Home';

const  App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/checkout:msgid" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
