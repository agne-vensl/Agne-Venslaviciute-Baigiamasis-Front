import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { telnetCodes, codes } from '../utils/telnetInternals';

export const WebsocketContext = createContext();

let incoming = false;
let buffer = '';

const WebsocketProvider = ({ children }) => {
  const [websocket, setWebsocket] = useState();

  const sendInput = (input) => {
    if (websocket.readyState === 1) {
      websocket.send(`${input}\r\n`);
    }
  };

  const displayOutput = (windowId, line) => {
    const window = document.getElementById(windowId);
    let element;

    if (line) {
      element = document.createElement('div');
      element.textContent = line;
    } else {
      element = document.createElement('br');
    }

    window.append(element);
    window.scrollTop = window.scrollHeight; // eslint-disable-line no-param-reassign
    buffer = '';
  };

  const parseData = (window, chars) => {
    let command;

    for (let i = 0; i < chars.length; i += 1) {
      incoming = true;

      // checks if a telnet negotiation code was received
      if (chars[i] === telnetCodes.IAC) {
        command = chars[i + 1];

        if (
          command === telnetCodes.WILL ||
          command === telnetCodes.WONT ||
          command === telnetCodes.DO ||
          command === telnetCodes.DONT
        ) {
          i += 3;
        }
      } else if (chars[i] === codes.CR) {
        displayOutput(window, buffer);

        if (chars[i + 1] === codes.LF) {
          displayOutput(window);
        }
      } else {
        buffer += String.fromCharCode(chars[i]);
      }
    }

    incoming = false;

    // if a newline did not come, but buffer is not empty, show the output,
    // because the server is likely waiting for user input
    setTimeout(() => {
      if (!incoming && buffer) {
        displayOutput(window, buffer);
      }
    }, 50);
  };

  const connect = (window) => {
    const socket = new WebSocket(process.env.REACT_APP_URL);
    socket.binaryType = 'arraybuffer';

    socket.addEventListener('open', () => {
      displayOutput(window, '<=== Connected to server ===>');
      displayOutput(window);
    });

    socket.addEventListener('close', () => {
      displayOutput(window);
      displayOutput(window, '<=== Disconnected from server ===>');
    });

    socket.addEventListener('error', (event) => {
      console.log(event);
    });

    socket.addEventListener('message', async (event) => {
      const chars = Array.from(new Uint8Array(event.data));

      parseData(window, chars);
    });

    setWebsocket(socket);
  };

  return (
    <WebsocketContext.Provider
      value={{ displayOutput, parseData, connect, sendInput, websocket }}
    >
      {children}
    </WebsocketContext.Provider>
  );
};

WebsocketProvider.propTypes = {
  children: PropTypes.node,
};

WebsocketProvider.defaultProps = {
  children: null,
};

export default WebsocketProvider;