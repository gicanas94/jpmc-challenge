import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

import { transitions } from '../../styles';

const StyledLabel = styled.label`
  color: #484848;
  display: block;
  font-size: 0.9em;
  padding-bottom: 2px;
  transition: color ${transitions.speed.fast} linear;

  ${({ disabled }) =>
    disabled &&
    `
    color: #dddddd !important;
  `}
`;

const StyledInput = styled.input`
  background-color: #f9f9f9;
  border: 0;
  border-bottom: 1px solid #484848;
  font-size: 1em;
  padding: 10px;
  transition: border-color ${transitions.speed.fast} linear;
  width: 100%;

  &:focus {
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    `
    color: #dddddd !important;
    border-color: #dddddd !important;
  `}
`;

const StyledErrorMessage = styled.div`
  color: #bb0000;
  font-size: 0.8em;
  padding-top: 5px;
`;

const StyledWrapper = styled.div`
  overflow: hidden;
  position: relative;

  ${({ error }) =>
    error &&
    `
    ${StyledLabel} {
      color: #bb0000;
    }

    ${StyledInput} {
      border-color: #bb0000;
      padding-right: 45px;
    }
  `}

  ${({ margin }) =>
    margin &&
    `
    margin: ${margin};
  `}

  ${({ success }) =>
    success &&
    `
    ${StyledLabel} {
      color: #008200;
    }

    ${StyledInput} {
      border-color: #008200;
    }
  `}
`;

const Input = ({
  disabled,
  error,
  name,
  label,
  margin,
  success,
  type,
  ...props
}) => (
  <StyledWrapper error={error} margin={margin} success={success}>
    <StyledLabel disabled={disabled} htmlFor={name}>
      {label}
    </StyledLabel>

    <StyledInput disabled={disabled} name={name} type={type} {...props} />

    {!disabled && error && <StyledErrorMessage>{error}</StyledErrorMessage>}
  </StyledWrapper>
);

Input.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  success: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

Input.defaultProps = {
  disabled: false,
  error: undefined,
  margin: undefined,
  success: false,
};

export default Input;
