import { Button, FlexboxGrid, Panel  } from 'rsuite';
import productData  from '../Data/Products.json';
import { useState } from 'react';

const FetchData = ({ category }) => {

  const [products] = useState(productData);

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
                 >
                   Add To Cart
                 </Button>
               </Panel>
             </Panel>
           </FlexboxGrid.Item>
         );
       }

       return null;
     });
  }
  return (
    <>
    <FlexboxGrid>
      <ProductList/>
    </FlexboxGrid>
    </>
  )
}

export default FetchData;
