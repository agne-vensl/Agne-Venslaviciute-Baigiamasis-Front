import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Register from './Register';
import Login from './Login';

const Auth = ({ closeModal }) => {
  const [route, setRoute] = useState('login');

  return (
    <>
      <div className="align-center">
        <button
          type="button"
          className="fake-link"
          onClick={() => setRoute('login')}
        >
          Login
        </button>
        <button
          type="button"
          className="fake-link"
          onClick={() => setRoute('register')}
        >
          Register
        </button>
      </div>

      <div>
        {route === 'register' ? (
          <Register closeModal={closeModal} />
        ) : (
          <Login closeModal={closeModal} />
        )}
      </div>
    </>
  );
};

Auth.propTypes = {
  closeModal: PropTypes.func,
};

Auth.defaultProps = {
  closeModal: null,
};

export default Auth;
