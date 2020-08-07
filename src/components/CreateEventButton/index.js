import { Plus as PlusIcon } from 'styled-icons/boxicons-regular';
import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

import { transitions } from '../../styles';

const StyledWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #dd7ea9;
  border-radius: 50%;
  bottom: 50px;
  box-shadow: 0 0 35px 2px #a48a96;
  cursor: pointer;
  padding: 5px;
  position: fixed;
  right: 50px;
  transition: transform ${transitions.speed.fast} ease-in-out;
  z-index: 10;

  &:hover,
  &:focus {
    // transform: translateY(-10px);
    transform: scale(1.09);
  }

  &:active {
    // transform: translateY(0);
    transform: scale(0.95);
    transition-duration: ${transitions.speed.ultrafast};
  }
`;

const StyledPlusIcon = styled(PlusIcon)`
  color: #dd7ea9;
  height: 70px;
  pointer-events: none;
  width: 70px;
`;

const CreateEventButton = ({ onClick }) => (
  <StyledWrapper onClick={onClick}>
    <StyledPlusIcon />
  </StyledWrapper>
);

CreateEventButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CreateEventButton;
