import React, { useState } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import { Button, Form, Notification } from '../../components';

const Login = ({ closeModal }) => {
  const [formData] = useState({ email: '', password: '' });
  const [notification, setNotification] = useState({});

  const login = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        closeModal();
      })
      .catch((err) =>
        setNotification({
          message: err.message,
        }),
      ); // eslint-disable-line function-paren-newline
  };

  return (
    <Form handleSubmit={login}>
      <h1>Login</h1>

      <Notification
        notification={notification}
        handleDelete={setNotification}
      />

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

      <Button text="Login" color="primary" type="submit" />
    </Form>
  );
};

Login.propTypes = {
  closeModal: PropTypes.func,
};

Login.defaultProps = {
  closeModal: null,
};

export default Login;
