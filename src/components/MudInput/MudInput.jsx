import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { WebsocketContext } from '../../contexts/WebsocketContext';

import * as S from './MudInput.style';

const MudInput = ({ windowId }) => {
  const Context = useContext(WebsocketContext);
  const [input, setInput] = useState();

  const submit = (e) => {
    e.preventDefault();

    Context.sendInput(input);
    Context.displayOutput(windowId, input);

    e.target.children[0].value = '';
    setInput('');
  };

  return (
    <S.InputContainer onSubmit={submit}>
      <S.Input onChange={(e) => setInput(e.target.value)} />
      <S.Button type="submit">Send</S.Button>
    </S.InputContainer>
  );
};

MudInput.propTypes = {
  windowId: PropTypes.string.isRequired,
};

export default MudInput;
