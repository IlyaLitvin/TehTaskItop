import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./Registration.module.css";
import signUp from "../../services/servicesApi";
import { useDispatch } from "react-redux";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Incorrect field length")
    .max(50, "Exceeded character limit")
    .required("This is a required field"),
  password: Yup.string()
    .required("This is a required field")
    .min(2, "Too short!"),
});

export default function Registration() {
  const dispatch = useDispatch();

  const handeSumbit = ({ email, password, role }) => {
    role
      ? dispatch(signUp({ email, password, role: "ADMIN" }))
      : dispatch(signUp({ email, password }));
  };

  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={{ email: "", password: "", role: false }}
        validationSchema={RegisterSchema}
        onSubmit={handeSumbit}
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
              <label>
                Admin
                <Field type="checkbox" name="role" />
              </label>
            </div>
            <button type="submit" className={css.button}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
