import PropTypes from 'proptypes';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { devices } from '../../../styles';
import Event from './Event';

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr;
  width: 100%;

  @media ${devices.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Events = ({ deleteEventHandler, events, highlightedEventsCategory }) => {
  const [subscribedEvents, setSubscribedEvents] = useState(
    JSON.parse(localStorage.getItem('SUBSCRIBED_EVENTS')) || [],
  );

  const subscribedCircleClickHandler = (clickedEventId) =>
    setSubscribedEvents(
      subscribedEvents.includes(clickedEventId)
        ? subscribedEvents.filter(
            (subscribedEventId) => subscribedEventId !== clickedEventId,
          )
        : [...subscribedEvents, clickedEventId],
    );

  useEffect(() => {
    localStorage.setItem('SUBSCRIBED_EVENTS', JSON.stringify(subscribedEvents));
  }, [subscribedEvents]);

  return (
    <StyledWrapper>
      {events.map((event) => (
        <Event
          deleteEventHandler={deleteEventHandler}
          event={event}
          highlightedEvent={highlightedEventsCategory}
          key={event.id}
          subscribed={subscribedEvents.includes(event.id)}
          subscribedCircleClickHandler={subscribedCircleClickHandler}
        />
      ))}
    </StyledWrapper>
  );
};

Events.propTypes = {
  deleteEventHandler: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  highlightedEventsCategory: PropTypes.bool.isRequired,
};

export default Events;
