import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Button.style';

const Button = ({ color, text, type }) => (
  <S.Button type={type} color={color}>
    {text}
  </S.Button>
);

Button.propTypes = {
  color: PropTypes.oneOf(['primary']),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  color: 'primary',
  type: 'button',
};

export default Button;
