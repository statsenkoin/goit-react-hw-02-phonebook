import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

export const FormikForm = ({ onSubmit }) => {
  return (
    <div>
      <h3>FormikForm</h3>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, { resetForm }) => {
          onSubmit({
            ...values,
            id: nanoid(8),
          });
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">
            Name
            <Field type="text" name="name" />
          </label>
          <label htmlFor="number">
            Number
            <Field type="text" name="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

FormikForm.propTypes = { onSubmit: PropTypes.func.isRequired };
