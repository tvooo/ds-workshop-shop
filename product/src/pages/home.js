/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, Avatar, Title, Card, Navigation } from "design-system";
import { Link } from "react-router-dom";

import item1Img from "../assets/item1.png";
import item2Img from "../assets/item2.png";
import item3Img from "../assets/item3.png";
import item4Img from "../assets/item4.png";
import avatarImage from "../assets/avatar.png";

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const StyledDiv4 = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDiv5 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
`;

const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 8px;
`;

const StyledButton = styled(Button)`
  padding: 0;
  border: 0;
  margin: 0 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
`;

const products = [
  {
    name: "Nike Air Force 1 '07",
    image: item1Img,
    price: "95.00",
    subtitle: "Men's Shoe",
  },
  {
    name: "Nike Air Shadow Force",
    image: item2Img,
    price: "95.00",
    subtitle: "Men's Shoe",
  },
  {
    name: "Nike Air Force 2 '07",
    image: item3Img,
    price: "95.00",
    subtitle: "Men's Shoe",
  },
  {
    name: "Nike Air Force 3 '07",
    image: item4Img,
    price: "95.00",
    subtitle: "Men's Shoe",
  },
];

const Home = () => {
  return (
    <div>
      <StyledDiv1>
        <Navigation
          firstAction={<Avatar src={avatarImage} />}
          lastAction={
            <Button isOutline>
              <Icon name="menu" />
            </Button>
          }
        />
        <Title>Store</Title>
        <StyledDiv3>
          <h4>All Product</h4>
          <StyledDiv4>
            <StyledButton color="transparent">
              <Icon name="viewItem" width={24} height={16} />
            </StyledButton>
            <StyledButton color="transparent">
              <Icon name="viewGrid" width={24} height={16} />
            </StyledButton>
            <StyledBorder />
            <StyledButton color="transparent">
              <Icon name="filter" width={24} height={16} />
            </StyledButton>
          </StyledDiv4>
        </StyledDiv3>
        <StyledDiv5>
          {products.map((item) => {
            return (
              <StyledLink to="/details">
                <Card size="medium" key={item.name} {...item} />
              </StyledLink>
            );
          })}
        </StyledDiv5>
      </StyledDiv1>
    </div>
  );
};

export default Home;
