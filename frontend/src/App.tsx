import React, { useState, useEffect, useRef, useMemo } from 'react';
import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from './types';
import MainLayout from './MainLayout';

const host = 'http://localhost:3000';
const token = window.location.hostname === 'localhost' ? '1' : '2';

function App() {
  const [id, setId] = useState<number>();
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = useMemo(() => {
    return io(host, {
      withCredentials: true,
      auth: {
        token,
      },
    });
  }, []);

  const socketRef = useRef(socket);

  useEffect(() => {
    socketRef.current.connect();
    socketRef.current.on('sendDataServer', (event) => {
      console.log(event);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  let timeout: NodeJS.Timeout;
  // eslint-disable-next-line
  const onChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const data = { id, user: 'test', text: value.target.value };
      console.log('Send to server', data);
      if (data.text) {
        socketRef.current.emit('sendDataClient', data);
      }
    }, 300);
  };
  // eslint-disable-next-line
  const onSelect = (value: number) => {
    setId(value);
  };

  return <MainLayout>xd</MainLayout>;
}

export default App;
