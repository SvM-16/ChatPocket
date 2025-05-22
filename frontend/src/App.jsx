import React from 'react';
import { PockiProvider } from './context/PockiProvider';
import Chat from './components/Chat'; // Suponiendo que tienes un componente

function App() {
  return (
    <PockiProvider>
      <Chat />
    </PockiProvider>
  );
}

export default App;
