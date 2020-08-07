import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

import { transitions } from '../../styles';

const StyledButton = styled.button`
  background-color: ${({ color }) => color};
  border: none;
  border-radius: 1px;
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
  padding: 20px;
  text-transform: uppercase;
  transition: all ${transitions.speed.superfast} linear;

  &:focus {
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #dddddd !important;
  `}

  ${({ disabled }) =>
    !disabled &&
    `
    cursor: pointer;
  `}

  &:active {
    transform: translateY(2px);
  }

  ${({ fullWidth }) =>
    fullWidth &&
    `
    width: 100%;
  `}
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  fullWidth: false,
};

export default Button;
