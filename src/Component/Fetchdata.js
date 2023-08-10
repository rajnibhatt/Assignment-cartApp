import { Button, FlexboxGrid, Panel  } from 'rsuite';
import productData  from '../Data/Products.json';
import { useEffect, useState } from 'react';
import { useCart } from './cart/Cart.Context';

const FetchData = ({ category }) => {

  const [products] = useState(productData);
 
  const { storedCartItems, storedTotalPrice, setCartItems, setTotalPrice } = useCart();

  const addToCart = (product) => {
  
    setCartItems([...storedCartItems, product]);
    setTotalPrice(storedTotalPrice + product?.price);

  };

  const ProductList = () => {
     return products.map((product) => {
       if (category && category.id === product.categoryId) {
         return (
           <FlexboxGrid.Item
             style={{ paddingRight: 40, paddingTop: 40 }}
             key={product.id}
           >
             <Panel
               shaded
               bordered
               bodyFill
               style={{ display: "inline-block", width: 240 }}
             >
               <img src={product.thumbnail} alt={product.name} height="240" />
               <Panel header={product.name}>
                 <p>
                   {product.price}&nbsp;{product.currency}
                 </p>
                 
                 <p style={{ color: product.inStock ? 'green' : 'red' }}>{product.inStock ? 'In Stock' : 'Out Of Stock'}</p>
                 
                 <Button
                   style={{
                     alignItems: "center",
                     width: "100%",
                     color: "white",
                     backgroundColor: "black",
                   }}
                   onClick={()=> product.inStock && addToCart(product)}
                   disabled={!product.inStock}
                 >
                   {product.inStock ? 'Add To Cart' : 'Out Of Stock'}
                 </Button>
               </Panel>
             </Panel>
           </FlexboxGrid.Item>
         );
       }

       return null;
     });
  }
  useEffect(() => {
    const cartItems = storedCartItems?.length > 0 ? storedCartItems : [];
    const totalPrice = storedTotalPrice!== undefined && storedTotalPrice > 0 ? storedTotalPrice : 0; 
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", totalPrice.toString());
  }, [storedCartItems, storedTotalPrice]);


  return (
    <>
      <FlexboxGrid>
        <ProductList />
      </FlexboxGrid>
    </>
  );
}

export default FetchData;
