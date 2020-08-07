import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Category from './components/Category';
import { createEvent, deleteEvent, getCategories, getEvents } from './api';
import CreateEventButton from './components/CreateEventButton';
import CreateEventForm from './forms/CreateEvent';
import { devices } from './styles';
import LoadingSpinner from './components/LoadingSpinner';
import Modal from './components/Modal';
import { removeDuplicatedObjectsFromArrays } from './utils';

const StyledAppWrapper = styled.div`
  margin: auto;
  padding: 20px;

  @media ${devices.tablet} {
    padding: 40px 50px;
  }
`;

const StyledCategoriesWrapper = styled.div`
  > *:not(*:last-of-type) {
    margin-bottom: 40px;
  }
`;

const App = () => {
  const [appIsLoading, setAppIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [highlightedEvents, setHighlightedEvents] = useState([]);

  const [createEventFormModalIsOpen, setCreateEventFormModalIsOpen] = useState(
    false,
  );

  const createEventFormSubmitHandler = async (eventToCreate) => {
    try {
      const createdEventFromApi = await createEvent(eventToCreate);

      setCategories(
        categories.map((category) =>
          category.id === createdEventFromApi.categoryId
            ? { ...category, events: [...category.events, createdEventFromApi] }
            : { ...category },
        ),
      );
    } catch (error) {
      // I know this is wrong, the ideal would be to show some componentized
      // notification or alert
      // eslint-disable-next-line no-alert
      alert(error.message);
    } finally {
      setCreateEventFormModalIsOpen(false);
    }
  };

  const deleteEventHandler = async (eventToDelete) => {
    try {
      setAppIsLoading(true);

      await deleteEvent(eventToDelete);

      // Simulate a more real (no so faster) request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCategories(
        categories.map((category) =>
          category.id === eventToDelete.categoryId
            ? {
                ...category,
                events: category.events.filter(
                  (event) => event.id !== eventToDelete.id,
                ),
              }
            : { ...category },
        ),
      );

      setHighlightedEvents(
        highlightedEvents.filter(
          (highlightedEvent) => highlightedEvent.id !== eventToDelete.id,
        ),
      );
    } catch (error) {
      // I know this is wrong, the ideal would be to show some componentized
      // notification or alert
      // eslint-disable-next-line no-alert
      alert(error.message);
    } finally {
      setAppIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const categoriesData = await getCategories();
        const eventsData = await getEvents();

        // Simulate a more real (no so faster) request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Shuffle events and get some of them
        const shuffledHighlightedEvents = eventsData
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        // Add the above shuffled events to the highlighted events category
        setHighlightedEvents(shuffledHighlightedEvents);

        // Fill each category with their respective events
        const categoriesWithEvents = categoriesData.map((category) => ({
          ...category,
          events: removeDuplicatedObjectsFromArrays(
            shuffledHighlightedEvents,
            eventsData,
          ).filter((event) => event.categoryId === category.id),
        }));

        setCategories(categoriesWithEvents);
        setAppIsLoading(false);
      } catch (error) {
        // I know this is wrong, the ideal would be to show some componentized
        // notification or alert
        // eslint-disable-next-line no-alert
        alert(error.message);
      }
    })();
  }, []);

  return (
    <>
      {appIsLoading && <LoadingSpinner />}

      {createEventFormModalIsOpen && (
        <Modal
          closeModalHandler={() => setCreateEventFormModalIsOpen(false)}
          width="400px"
        >
          <CreateEventForm
            categoryOptions={categories}
            createEventFormSubmitHandler={createEventFormSubmitHandler}
          />
        </Modal>
      )}

      <StyledAppWrapper className="app">
        <CreateEventButton
          onClick={() => setCreateEventFormModalIsOpen(true)}
        />

        <StyledCategoriesWrapper>
          {highlightedEvents.length > 0 && (
            <Category
              deleteEventHandler={deleteEventHandler}
              events={highlightedEvents}
              highlightedEventsCategory
              title="Highlighted Events"
            />
          )}

          {categories.map((category) =>
            category.events.length > 0 ? (
              <Category
                deleteEventHandler={deleteEventHandler}
                events={category.events}
                key={category.id}
                title={category.label}
              />
            ) : null,
          )}
        </StyledCategoriesWrapper>
      </StyledAppWrapper>
    </>
  );
};

export default App;
