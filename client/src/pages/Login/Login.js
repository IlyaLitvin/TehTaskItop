import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./Login.module.css";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Incorrect field length")
    .max(50, "Exceeded character limit")
    .required("This is a required field"),
  password: Yup.string()
    .required("This is a required field")
    .min(6, "Too short!"),
});

export default function Login() {
  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={{ email: "", password: "", toggle: false }}
        validationSchema={RegisterSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <h1 className={css.title}>Create your account</h1>
            <div className={css.registrationInputs}>
              <label className={css.formLabel}>
                <Field
                  className={`${css.inputField} ${
                    errors.email && touched.email ? css.errorInput : ""
                  }`}
                  type="email"
                  name="email"
                  placeholder="E-mail *"
                />
                <ErrorMessage
                  className={css.validField}
                  name="email"
                  component="span"
                />
              </label>
              <label className={css.formLabel}>
                <Field
                  className={`${css.inputField} ${
                    errors.password && touched.password ? css.errorInput : ""
                  }`}
                  type="password"
                  name="password"
                  placeholder="Пароль *"
                />
                <ErrorMessage
                  className={css.validField}
                  name="password"
                  component="span"
                />
              </label>
            </div>
            <button type="submit" className={css.button}>
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
