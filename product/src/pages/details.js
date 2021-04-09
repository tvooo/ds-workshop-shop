import React from "react";
import styled from "styled-components";
import { Button, Icon, Card, Navigation } from "design-system";
import itemImg from "../assets/item1large.png";

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const StyledDiv4 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Details = () => {
  return (
    <div>
      <StyledDiv1>
        <Navigation
          firstAction={
            <Button isOutline>
              <Icon name="arrowBack" />
            </Button>
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
          <Button style={{ marginTop: "40px" }}>Add to Cart</Button>
        </StyledDiv4>
      </StyledDiv1>
    </div>
  );
};

export default Details;
