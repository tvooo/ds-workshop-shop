/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import {
  Avatar,
  Button,
  Icon,
  Card,
  DataTable,
  Navigation,
} from "design-system";

import avatarImage from "../assets/avatar.png";
import item1Img from "../assets/item1.png";

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

const StyledDiv5 = styled.div`
  margin-top: 32px;
`;

const StyledTableHeader = styled.h2`
  margin-bottom: 30px;
`;

const orderDetails = {
  items: [
    { name: "Subtotal", price: "€95.00" },
    { name: "Estimated Delivery & Handling", price: "€0.00" },
  ],
  total: "€95.00",
};

const Cart = () => {
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
        <Styledh1>Shopping Cart</Styledh1>
        <Card
          size="small"
          name="Nike Air Force 1 '07 LX"
          image={item1Img}
          price="95.00"
          subtitle="Men's Shoe"
        />
        <StyledDiv5>
          <StyledTableHeader>Summary</StyledTableHeader>
          <DataTable {...orderDetails} />
          <Button isStretched>Checkout</Button>
        </StyledDiv5>
      </StyledDiv1>
    </div>
  );
};

export default Cart;
