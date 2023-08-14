import React from "react";
import { useCart } from "../Component/cart/Cart.Context";
import { Table, Button, Container, FlexboxGrid, Header, IconButton } from "rsuite";
import { Icon } from "@rsuite/icons";
import { FaHouseUser } from "react-icons/fa6"; 
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  
  const { Column, HeaderCell, Cell } = Table;
  const HomeIcon = () => <Icon as={FaHouseUser} />;

  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  const { storedCartItems, storedTotalPrice, setCartItems, setTotalPrice } = useCart();

  return (
    <>
      <Container style={{ padding: "0 10px" }}>
        <Header className="alignhed">
          <FlexboxGrid justify="start">
            <IconButton icon={<HomeIcon />} onClick={redirectToHome}>
              Home
            </IconButton>
          </FlexboxGrid>
        </Header>
      </Container>
      <Container>
        <FlexboxGrid justify="center" style={{flexWrap:'wrap'}}>
          <FlexboxGrid.Item>
            <h2>Cart Item</h2>
          </FlexboxGrid.Item>
        </FlexboxGrid>
            <Table
              height={400}
              data={storedCartItems}
              onRowClick={(rowData) => {
                console.log(rowData);
              }}
            >
              <Column width={60} align="center" fixed>
                <HeaderCell>Id</HeaderCell>
                <Cell dataKey="id" />
              </Column>

              {/* <Column width={150}>
                <HeaderCell></HeaderCell>
                <Cell dataKey="thumbnail" />
              </Column> */}

              <Column width={150}>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="name" />
              </Column>

              <Column width={150}>
                <HeaderCell>Price</HeaderCell>
                <Cell dataKey="price" />
              </Column>

              <Column width={300}>
                <HeaderCell>Qty</HeaderCell>
                <Cell dataKey="qty" />
              </Column>

              <Column width={80} fixed="right">
                <HeaderCell>...</HeaderCell>

                <Cell style={{ padding: "6px" }}>
                  {(rowData) => (
                    <Button
                      appearance="link"
                      onClick={() => alert(`id:${rowData.id}`)}
                    >
                      Edit
                    </Button>
                  )}
                </Cell>
              </Column>
            </Table>
      </Container>
    </>
  );
};

export default Checkout;
