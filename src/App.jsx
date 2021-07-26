import React, { useEffect } from 'react';

import { Window } from './components';
import { displayOutput, parseData } from './utils/parser';

const App = () => {
  useEffect(() => {
    const window = document.getElementById('main-window-parent');

    const connect = () => new WebSocket(process.env.REACT_APP_URL);

    let socket = connect();
    socket.binaryType = 'arraybuffer';

    socket.addEventListener('open', () => {
      displayOutput(window, '<=== Connected to server ===>');
      displayOutput(window);
    });

    socket.addEventListener('close', () => {
      displayOutput(window);
      displayOutput(window, '<=== Disconnected from server ===>');
      socket = connect();
    });

    socket.addEventListener('error', (event) => {
      console.log(event);
    });

    socket.addEventListener('message', async (event) => {
      // console.log(event.data);
      const chars = Array.from(new Uint8Array(event.data));

      parseData(socket, window, chars);
    });
  }, []);

  return (
    <div id="screen" style={{ display: 'flex', height: '100vh' }}>
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Window id="chat-window" height="25%" />
        <Window id="main-window" style={{ flex: '1' }} />
      </div>
    </div>
  );
};

export default App;
