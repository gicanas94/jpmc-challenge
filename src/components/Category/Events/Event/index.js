import {
  CalendarAlt as CalendarIcon,
  Map as LocationIcon,
  TrashAlt as TrashIcon,
} from 'styled-icons/boxicons-regular';

import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StyledDescription = styled.p`
  color: #c4c4c4;
  font-size: 0.9em;
`;

const StyledTrashIcon = styled(TrashIcon)`
  color: #c46363;
  cursor: pointer;
  display: none;
  height: 25px;
  position: absolute;
  right: 20px;
  width: 25px;
  top: 20px;
`;

const StyledLocationWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 15px;
`;

const StyledLocation = styled.p`
  font-size: 0.9em;
  font-weight: bold;
`;

const StyledLocationIcon = styled(LocationIcon)`
  color: #dd7ea9;
  height: 18px;
  margin-right: 15px;
  width: 18px;
`;

const StyledDateWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledDate = styled.p`
  font-size: 0.9em;
  font-weight: bold;
`;

const StyledCalendarIcon = styled(CalendarIcon)`
  color: #dd7ea9;
  height: 18px;
  margin-right: 15px;
  width: 18px;
`;

const StyledSubscribedCircle = styled.div`
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #dd7ea9;
  border-radius: 50%;
  bottom: 20px;
  box-shadow: inset 0 0 4px 0.1px #c9c9c9;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  right: 20px;
  position: absolute;
  width: 40px;
`;

const StyledSubscribedInsideCircle = styled.div`
  background-color: #dd7ea9;
  border-radius: 50%;
  height: 25px;
  width: 25px;
`;

const StyledWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #dd7ea9;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  min-height: 220px;
  justify-content: space-between;
  padding: 20px 50px 20px 20px;
  position: relative;
  width: 100%;

  &:hover {
    ${StyledTrashIcon} {
      display: block;
    }
  }

  ${({ highlightedEvent }) =>
    highlightedEvent &&
    `
    border-color: #6ecade;
    box-shadow: 0 0 10px 1px #ccf3fb;

    ${StyledLocationIcon},
    ${StyledCalendarIcon} {
      color: #6ecade;
    }

    ${StyledSubscribedCircle} {
      border-color: #6ecade;
    }

    ${StyledSubscribedInsideCircle} {
      background-color: #6ecade;
    }
  `}
`;

const Event = ({
  deleteEventHandler,
  event,
  highlightedEvent,
  subscribed,
  subscribedCircleClickHandler,
}) => (
  <StyledWrapper highlightedEvent={highlightedEvent}>
    <div>
      <StyledLabel>{event.label}</StyledLabel>
      <StyledDescription>{event.description}</StyledDescription>
    </div>

    <StyledTrashIcon onClick={() => deleteEventHandler(event)} />

    <div>
      <StyledLocationWrapper>
        <StyledLocationIcon />
        <StyledLocation>{event.location}</StyledLocation>
      </StyledLocationWrapper>

      <StyledDateWrapper>
        <StyledCalendarIcon />
        <StyledDate>{event.date}</StyledDate>
      </StyledDateWrapper>
    </div>

    <StyledSubscribedCircle
      onClick={() => subscribedCircleClickHandler(event.id)}
    >
      {subscribed && <StyledSubscribedInsideCircle />}
    </StyledSubscribedCircle>
  </StyledWrapper>
);

Event.propTypes = {
  deleteEventHandler: PropTypes.func.isRequired,
  event: PropTypes.objectOf(PropTypes.any).isRequired,
  highlightedEvent: PropTypes.bool.isRequired,
  subscribed: PropTypes.bool.isRequired,
  subscribedCircleClickHandler: PropTypes.func.isRequired,
};

export default Event;
