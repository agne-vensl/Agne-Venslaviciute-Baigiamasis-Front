import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Window.style';

const Window = ({ id, height, width, style }) => (
  <>
    <S.WindowContainer
      id={`${id}-parent`}
      height={height}
      width={width}
      style={style}
    >
      <S.Window id={id} />
    </S.WindowContainer>
    <S.Border />
  </>
);

Window.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.shape(),
};

Window.defaultProps = {
  height: '20rem',
  width: '100%',
  style: undefined,
};

export default Window;
