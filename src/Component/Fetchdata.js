import { Button, FlexboxGrid, Panel  } from 'rsuite';
import { useEffect } from 'react';
import { useCart } from './cart/Cart.Context';

const FetchData = ({ products }) => {

  const { storedCartItems, storedTotalPrice, setCartItems, setTotalPrice } = useCart();

  const addToCart = (product) => {

    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems?.find(p => product.id === p.id);
      if(existingItem !== null && existingItem !== undefined) {
        const itemIndex = prevCartItems.indexOf(existingItem);
        existingItem.qty+=1;
        storedCartItems[itemIndex] = existingItem;
        return storedCartItems;
      } else {
        const cartItem = product;
        cartItem.qty = 1;
        return [...storedCartItems, cartItem];
      }
    });
    setTotalPrice(storedTotalPrice + product?.price);

  };

  const ProductList = () => {
    if(!products) {
      return (
        <p style={{paddingTop: 40, fontSize: 16}}>No Products found in this category.</p>
      );
    }
    return products?.map((product) => (
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
    ));
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
