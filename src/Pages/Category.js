import React, { useEffect, useMemo, useReducer, useState } from "react";
import { Container, Header, Content, Sidebar } from "rsuite";
import { useParams, useNavigate } from "react-router-dom";
import FetchData from "../Component/Fetchdata";
import categoryData from "../Data/Categorry.json";
import productData from "../Data/Products.json"
import { FlexboxGrid, IconButton } from "rsuite";
import Cart from "../Component/cart/Cart";
import { Icon } from '@rsuite/icons';
import { FaHouseUser } from 'react-icons/fa6'; 
import { FiltersList } from "../Component/FiltersList";
import { ProductProvider } from "../Component/Product/product.context";
import productsReducer from "../Component/Product/productsReducer";


const Category = () => {

  const [categories] = useState(categoryData);
  
  const { categoryId } = useParams();
    
  const productsToShow = useMemo(() => {
    return productData.filter(p => p.categoryId === categoryId);
  },[categoryId]);
  
  const [filteredProducts, dispatch] = useReducer(productsReducer, productsToShow);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (checked, filterName) => {
    if (checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, filterName]);
    } else {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== filterName)
      );
    }
  };

  useEffect(() => {
    dispatch({
      type: "setFilters",
      filters: selectedFilters,
      initialProducts: productsToShow,
    });
  }, [selectedFilters, productsToShow]);


  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState();

  const HomeIcon = () => (
    <Icon as={FaHouseUser} />
  )

  const redirectToHome = () => {
    navigate('/');
  }

  useEffect(() => {
    const filteredCategory = categories.find(category => categoryId === category.id);
    setSelectedCategory(filteredCategory);
  }, [categoryId, categories]);
  
  return (
    <>
      <Container style={{ padding: "0 10px" }}>
        <Header className="alignhed">
          <FlexboxGrid justify="start">
            <IconButton icon={<HomeIcon />} onClick={redirectToHome}>
              Home
            </IconButton>
          </FlexboxGrid>
          <FlexboxGrid justify="end">
            <Cart></Cart>
          </FlexboxGrid>
        </Header>
      </Container>
      <Container style={{ marginTop: "100px" }}>
        <ProductProvider>
          <Sidebar
            style={{
              padding: "0 10px",
              borderRight: "2px solid gray",
            }}
            title="Filters"
          >
            <h2>Filters</h2>
            <Content>
              <FiltersList
                handleFilterChange={handleFilterChange}
              />
            </Content>
          </Sidebar>
          <Content
            style={{
              padding: "0 20px",
            }}
          >
            <h2>{selectedCategory?.name}</h2>
            <FetchData products={filteredProducts}></FetchData>
          </Content>
        </ProductProvider>
      </Container>
    </>
  );
};

export default Category;
