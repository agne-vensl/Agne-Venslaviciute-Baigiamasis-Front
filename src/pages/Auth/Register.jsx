import React, { useState } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import { Button, Form } from '../../components';

const Register = ({ closeModal }) => {
  const [formData] = useState({ email: '', password: '' });

  const register = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        closeModal();
      })
      .catch((er) => alert(er.message));
  };

  return (
    <Form handleSubmit={register}>
      <h1>Register</h1>

      <label htmlFor="email">
        Email
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@email.com"
          minLength="8"
          required
          onChange={(e) => {
            formData.email = e.target.value;
          }}
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          minLength="4"
          required
          onChange={(e) => {
            formData.password = e.target.value;
          }}
        />
      </label>

      <Button text="Register" color="primary" type="submit" />
    </Form>
  );
};

Register.propTypes = {
  closeModal: PropTypes.func,
};

Register.defaultProps = {
  closeModal: null,
};

export default Register;
