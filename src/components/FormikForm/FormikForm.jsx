import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export const FormikForm = ({ onSubmit }) => {
  return (
    <div>
      <h3>FormikForm</h3>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SubmitSchema}
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
            <ErrorMessage name="name"></ErrorMessage>
          </label>
          <label htmlFor="number">
            Number
            <Field type="text" name="number" />
            <ErrorMessage name="number"></ErrorMessage>
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

FormikForm.propTypes = { onSubmit: PropTypes.func.isRequired };
