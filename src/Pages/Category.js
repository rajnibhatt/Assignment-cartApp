import React, { useEffect, useState } from "react";
import { Container, Header, Content, Sidebar } from "rsuite";
import { useParams, useNavigate } from "react-router-dom";
import FetchData from "../Component/Fetchdata";
import categoryData from "../Data/Categorry.json";
import { Checkbox, CheckboxGroup, FlexboxGrid, IconButton } from "rsuite";
import Cart from "../Component/cart/Cart";
import { CartProvider } from "../Component/cart/Cart.Context";
import { Icon } from '@rsuite/icons';
import { FaHouseUser } from 'react-icons/fa6'; 


const Category = () => {
    const [categories] = useState(categoryData);

    const { categoryId } = useParams();

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
              <IconButton icon={<HomeIcon/>} onClick={redirectToHome}>Home</IconButton>
            </FlexboxGrid>
            <FlexboxGrid justify="end">
              <Cart></Cart>
            </FlexboxGrid>
          </Header>
        </Container>
        <Container style={{ marginTop: "100px" }}>
          <Sidebar
            style={{
              padding: "0 10px",
              borderRight: "2px solid gray",
            }}
            title="Filters"
          >
            <h2>Filters</h2>
            <Content>
              <CheckboxGroup name="checkboxList">
                <Checkbox value="A">Keyboard</Checkbox>
                <Checkbox value="B">Headphones</Checkbox>
                <Checkbox value="C">Laptop</Checkbox>
              </CheckboxGroup>
            </Content>
          </Sidebar>
          <Content
            style={{
              padding: "0 20px",
            }}
          >
            <h2>{selectedCategory?.name}</h2>
            <FetchData category={selectedCategory}></FetchData>
          </Content>
        </Container>
      </>
    );
};

export default Category;
