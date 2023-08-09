import React,{useEffect, useState} from "react";
import { Container, Header, Content, Sidebar } from "rsuite";
import { useParams } from "react-router-dom";
import FetchData from "../Component/Fetchdata";
import categoryData from "../Data/Categorry.json";


const Category = () => {
    const [categories] = useState(categoryData);

    const { categoryId } = useParams();

    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
      const filteredCategory = categories.find(category => categoryId === category.id);
      setSelectedCategory(filteredCategory);
    }, [categoryId, categories]);
   
    return (
      <Container>
        <Sidebar>Filters</Sidebar>
        <Container>
          <Header>Cart Details</Header>
          <Content>
            <h2>{ selectedCategory?.name }</h2>
            <FetchData category={selectedCategory}></FetchData>
          </Content>
        </Container>
      </Container>
    );
};

export default Category;
