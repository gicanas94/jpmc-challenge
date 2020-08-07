import { CloseO as CloseIcon } from 'styled-icons/evil';
import PropTypes from 'proptypes';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { devices, transitions } from '../../styles';

const StyledWrapper = styled.div`
  background-color: rgba(221, 126, 169, 0.1);
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 15;
`;

const StyledCloserOnClick = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const StyledContent = styled.div`
  background-color: #ffffff;
  border: 1px solid #dd7ea9;
  border-radius: 1px;
  padding: 30px;
  position: relative;
  width: 90%;

  @media ${devices.mobileL} {
    ${({ width }) =>
      width &&
      `
    width: ${width};
  `}
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  color: #dd7ea9;
  cursor: pointer;
  right: 20px;
  position: absolute;
  height: 50px;
  top: 20px;
  transition: all ${transitions.speed.superfast} linear;
  width: 50px;

  &:active {
    transform: translateY(2px);
  }
`;

const Modal = ({ children, closeModalHandler, width }) => {
  useEffect(() => {
    document.querySelector('.app').style.filter = 'blur(12px)';
    document.querySelector('body').style.overflow = 'hidden';

    return () => {
      document.querySelector('.app').style.filter = 'none';
      document.querySelector('body').style.overflow = 'auto';
    };
  }, []);

  return (
    <StyledWrapper>
      <StyledCloserOnClick onClick={closeModalHandler} />

      <StyledContent width={width}>
        <StyledCloseIcon onClick={closeModalHandler} />
        {children}
      </StyledContent>
    </StyledWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};

export default Modal;
