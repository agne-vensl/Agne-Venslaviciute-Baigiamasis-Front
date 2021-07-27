import React, { useContext, useEffect } from 'react';

import { MudInput, Window } from './components';
import { WebsocketContext } from './contexts/WebsocketContext';

const mainWindow = 'main-window-parent';

const App = () => {
  const Context = useContext(WebsocketContext);

  useEffect(() => {
    if (
      Context.websocket?.readyState !== 0 &&
      Context.websocket?.readyState !== 1
    ) {
      Context.connect(mainWindow);
    }
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
        <MudInput windowId={mainWindow} />
      </div>
    </div>
  );
};

export default App;
