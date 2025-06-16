import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const textRef = useRef();

  useEffect(() => {
    socket.on('receive-changes', (data) => {
      textRef.current.value = data;
    });
  }, []);

  const handleChange = (e) => {
    socket.emit('send-changes', e.target.value);
  };

  return (
    <textarea
      ref={textRef}
      onChange={handleChange}
      placeholder="Start typing..."
      style={{ width: '100%', height: '90vh', fontSize: '1.2rem' }}
    />
  );
}

export default App;


