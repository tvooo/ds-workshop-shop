import React from "react";
import styled from "styled-components";
import { Button, Icon, Card, Navigation } from "design-system";
import { Link } from 'react-router-dom';
import itemImg from "../assets/item1large.png";

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const StyledDiv4 = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  color: currentColor;
  text-decoration: none;
`;

const Details = () => {
  return (
    <div>
      <StyledDiv1>
        <Navigation
          firstAction={
            <StyledLink to="/">
              <Button isOutline>
                <Icon name="arrowBack" />
              </Button>
            </StyledLink>
          }
          title="Nike Air Force 1 '07 LX"
        />
        <StyledDiv4>
          <Card
            size="big"
            name="Nike Air Force 1 '07 LX"
            image={itemImg}
            price="95.00"
            subtitle="Men's Shoe"
          />
          <StyledLink to="/cart"><Button style={{ marginTop: "40px" }}>Add to Cart</Button></StyledLink>
        </StyledDiv4>
      </StyledDiv1>
    </div>
  );
};

export default Details;
