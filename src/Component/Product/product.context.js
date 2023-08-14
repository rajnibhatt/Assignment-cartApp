import React, { createContext, useContext, useState } from "react";
import Productdb from '../../Data/Products.json';

const ProductContext = createContext();

export const ProductProvider = ({children}) =>{
    const [products,setProducts] = useState(Productdb);
    
    return(
        <ProductContext.Provider value={{products,setProducts}}>
            {children}
        </ProductContext.Provider>
    )

}


export const useProduct = () => useContext(ProductContext);