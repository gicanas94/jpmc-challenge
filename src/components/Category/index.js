import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

import Events from './Events';
import { sortArrayByDate } from '../../utils';

const StyledWrapper = styled.div``;

const StyledTitle = styled.span`
  color: #dd7ea9;
  display: block;
  font-size: 2em;
  line-height: 1;
  margin: 0;
  margin-bottom: 25px;

  ${({ highlightedEventsCategory }) =>
    highlightedEventsCategory &&
    `
    color: #6ecade;
  `}
`;

const Category = ({
  deleteEventHandler,
  events,
  highlightedEventsCategory,
  title,
}) => (
  <StyledWrapper>
    <StyledTitle highlightedEventsCategory={highlightedEventsCategory}>
      {title}
    </StyledTitle>

    <Events
      deleteEventHandler={deleteEventHandler}
      events={sortArrayByDate(events)}
      highlightedEventsCategory={highlightedEventsCategory}
    />
  </StyledWrapper>
);

Category.propTypes = {
  deleteEventHandler: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  highlightedEventsCategory: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Category.defaultProps = {
  highlightedEventsCategory: false,
};

export default Category;
