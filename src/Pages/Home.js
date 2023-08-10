import React from "react";
import FetchCategory from '../Component/FetchCategory';
import { useNavigate } from "react-router-dom";
import { FlexboxGrid, Container, Header, Content } from "rsuite";
import Cart from "../Component/cart/Cart";
import { CartProvider } from "../Component/cart/Cart.Context";

const Home = () => {

  const navigate = useNavigate();

  const redirectToCategory = (categoryId) => {
    const categoryPath = `/category/${categoryId}`;
    navigate(categoryPath);
  };

    return (
      <>
        <Container
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <Header>
            <FlexboxGrid justify="end" align="middle">
              <FlexboxGrid.Item>
                <Cart></Cart>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Header>
          <Content>
            <FlexboxGrid
              justify="center"
              align="middle"
              style={{
                flexWrap: "wrap",
                alignContent: "center",
                width: "100%",
                height: "100%",
              }}
              className="main-section"
            >
              <FlexboxGrid.Item className="showlist">
                <FetchCategory
                  redirectToCategory={redirectToCategory}
                ></FetchCategory>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </>
    );
}

export default Home;