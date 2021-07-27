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

    if (!Context.hideUserInput) {
      Context.displayOutput(windowId, input);
    }

    e.target.children[0].value = '';
    setInput('');
  };

  const updateInput = (e) => {
    if (Context.hideUserInput) {
      setInput(input + e.target.value);
      e.target.value = '';
    } else {
      setInput(e.target.value);
    }
  };

  return (
    <S.InputContainer onSubmit={submit}>
      <S.Input onChange={updateInput} />
      <S.Button type="submit">Send</S.Button>
    </S.InputContainer>
  );
};

MudInput.propTypes = {
  windowId: PropTypes.string.isRequired,
};

export default MudInput;
