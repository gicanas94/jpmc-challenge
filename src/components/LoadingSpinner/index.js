import React from 'react';
import styled from 'styled-components';

import { keyframes } from '../../styles';

const StyledWrapper = styled.div`
  align-items: center;
  background-color: #f9f9f9;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
`;

const StyledEmoji = styled.span`
  animation: ${keyframes.beat(1.07)} 1s infinite
    cubic-bezier(0.215, 0.61, 0.355, 1);
  font-size: 5.5em;
  margin-bottom: 60px;
`;

const LoadingScreen = () => (
  <StyledWrapper>
    {/* eslint-disable jsx-a11y/accessible-emoji */}
    {/* I disable this rule since StyledEmoji is already a <span> */}
    <StyledEmoji aria-label="Calendar Emoji" role="img">
      📅
    </StyledEmoji>
  </StyledWrapper>
);

export default LoadingScreen;
