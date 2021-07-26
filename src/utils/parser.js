import { telnetCodes, codes } from './telnetInternals';

let incoming = false;
let buffer = '';

export const displayOutput = (window, line) => {
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

export const parseData = (socket, window, chars) => {
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
