import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const App = () => (
  <div>
    <Formik
      initialValues={{ email: "", date: "" }}
      validate={values => {
        let errors = {};
        if (!values.date) {
          errors.date = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" type="email" name="email" />
          <ErrorMessage data-testid="emailError" name="email" component="div" />
          <br />
          <DatePicker
            selected={values.date}
            onChange={event => {
              setFieldValue("date", event);
            }}
          />
          <ErrorMessage data-testid="dateError" name="date" component="div" />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default App;
