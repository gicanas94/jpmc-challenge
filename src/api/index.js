import { API_CONFIG } from '../constants';

export const getCategories = async () => {
  const response = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CATEGORIES}`,
  );

  const data = await response.json();

  return data;
};

export const getEvents = async () => {
  const response = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.EVENTS}`,
  );

  const data = await response.json();

  return data;
};

export const createEvent = async (event) => {
  const response = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.EVENTS}`,
    {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  const data = await response.json();

  return data;
};

export const deleteEvent = async (event) => {
  const response = await fetch(
    `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.EVENTS}/${event.id}`,
    {
      method: 'DELETE',
    },
  );

  const data = await response.json();

  return data;
};
