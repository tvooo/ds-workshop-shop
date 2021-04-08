
import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

/* 
 * Avatar component
 */
const Avatar = (props) => {
  return <StyledAvatar {...props} />;
};

Avatar.propTypes = {
  src: string,
}

export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

export default Avatar;
