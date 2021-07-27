import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Form.style';

const Form = ({ children, handleSubmit }) => (
  <S.Form onSubmit={handleSubmit}>{children}</S.Form>
);

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
