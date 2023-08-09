import React from "react";
import { Button, Dropdown } from "rsuite";
import FetchCategory from '../Component/FetchCategory';
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();

  const redirectToCategory = (categoryId) => {
    const categoryPath = `/category/${categoryId}`;
    navigate(categoryPath);
  };


    function ShowCompData(){
        return <FetchCategory/>
    }
    const CustomDropdown = ({ ...props }) => (
      <Dropdown {...props} className="mainlist">
        <Dropdown.Item className="list" onClick={ShowCompData}>
          Headphones
        </Dropdown.Item>
        <Dropdown.Item className="list">Keyboard</Dropdown.Item>
        <Dropdown.Item className="list">Mouse</Dropdown.Item>
        <Dropdown.Item className="list">Computer</Dropdown.Item>
        <Dropdown.Item className="list">Charger</Dropdown.Item>
        <Dropdown.Item className="list">Settings</Dropdown.Item>
        <Dropdown.Item className="list">About Us</Dropdown.Item>
      </Dropdown>
    );


    return (
      <>
        <div className="main-body">
          <div className="sidebar">
            <CustomDropdown title="List" trigger="click" />
            <Button className="btn" type="primary">
              Home
            </Button>
            <Button className="btn" type="primary">
              Category
            </Button>
            <Button className="btn" type="primary">
              Checkout
            </Button>
          </div>
        </div>
        <div className="main-section">
          <div className="showlist">
            <FetchCategory
              redirectToCategory={redirectToCategory}
            ></FetchCategory>
          </div>
        </div>
      </>
    );
}

export default Home;