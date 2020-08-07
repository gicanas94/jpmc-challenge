import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';

const StyledTitle = styled.p`
  margin-bottom: 30px;
  max-width: 85%;
`;

const StyledButtonsWrapper = styled.div``;

const CreateEventForm = ({ categoryOptions, createEventFormSubmitHandler }) => {
  const CreateEventFormSchema = Yup.object().shape({
    label: Yup.string().trim().required('This field is required'),
    description: Yup.string().trim().required('This field is required'),
    location: Yup.string().trim().required('This field is required'),
    date: Yup.string().trim().required('This field is required'),
    category: Yup.string().trim().required('This field is required'),
  });

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);

    const { label, description, location, date, category } = values;

    // Simulate a more real (no so faster) request
    setTimeout(() => {
      createEventFormSubmitHandler({
        label,
        description,
        location,
        date,
        categoryId: Number(category),
      });
    }, 1500);
  };

  return (
    <Formik
      initialValues={{
        label: '',
        description: '',
        location: '',
        date: '',
        category: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={CreateEventFormSchema}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        isSubmitting,
        touched,
        values,
      }) => (
        <Form>
          <StyledTitle>
            Complete the following fields to create a new event.
          </StyledTitle>

          <Input
            disabled={isSubmitting}
            error={errors.label && touched.label && errors.label}
            label="Title"
            margin="0 0 30px 0"
            name="label"
            onBlur={handleBlur}
            onChange={handleChange}
            success={!errors.label && touched.label}
            type="text"
            value={values.label}
          />

          <Input
            disabled={isSubmitting}
            error={
              errors.description && touched.description && errors.description
            }
            label="Description"
            margin="0 0 30px 0"
            name="description"
            onBlur={handleBlur}
            onChange={handleChange}
            success={!errors.description && touched.description}
            type="text"
            value={values.description}
          />

          <Input
            disabled={isSubmitting}
            error={errors.location && touched.location && errors.location}
            label="Location"
            margin="0 0 30px 0"
            name="location"
            onBlur={handleBlur}
            onChange={handleChange}
            success={!errors.location && touched.location}
            type="text"
            value={values.location}
          />

          <Input
            disabled={isSubmitting}
            error={errors.date && touched.date && errors.date}
            label="Date"
            margin="0 0 30px 0"
            name="date"
            onBlur={handleBlur}
            onChange={handleChange}
            success={!errors.date && touched.date}
            type="date"
            value={values.date}
          />

          <Select
            disabled={isSubmitting}
            error={errors.category && touched.category && errors.category}
            label="Category"
            margin="0 0 30px 0"
            name="category"
            onBlur={handleBlur}
            onChange={handleChange}
            options={categoryOptions}
            success={!errors.category && touched.category}
            value={values.category}
          />

          <StyledButtonsWrapper>
            <Button
              color="#dd7ea9"
              disabled={isSubmitting}
              fullWidth
              type="submit"
            >
              Done
            </Button>
          </StyledButtonsWrapper>
        </Form>
      )}
    </Formik>
  );
};

CreateEventForm.propTypes = {
  categoryOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  createEventFormSubmitHandler: PropTypes.func.isRequired,
};

export default CreateEventForm;
