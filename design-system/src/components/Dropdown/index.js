import { bool, string } from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button, Icon } from '../..';

/* Dropdown
 *
 * Allows the user to select from a list of options.
 */
const Dropdown = ({ children, disabled = false, ...rest }) => {
  return (
    <StyledDropdown isOutline color="transparent" disabled={disabled} {...rest}>
      {children} <Icon name="chevronDown" width="8" />
    </StyledDropdown>
  );
};

Dropdown.propTypes = {
  children: string.isRequired,
  disabled: bool,
}

Dropdown.defaultProps = {
  disabled: false,
}

const StyledDropdown = styled(Button)`
  width: 138px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export default Dropdown;
