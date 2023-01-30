import React, { useState, useEffect, useRef, useMemo } from 'react';
import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from './types';
import MainLayout from './MainLayout';
import { useMediaQuery } from 'react-responsive';
import { useDeviceStore } from './stores';

const host = 'http://localhost:3000';
const token = window.location.hostname === 'localhost' ? '1' : '2';

function App() {
  // Check type device
  const [setDevice] = useDeviceStore((state) => [state.setDeviceType]);
  const isTablet = useMediaQuery({ maxWidth: 1199 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (isMobile) {
      setDevice('mobile');
    } else if (isTablet) {
      setDevice('tablet');
    } else {
      setDevice('desktop');
    }
  }, [isTablet, isMobile]);

  // Socket connection
  const [id, setId] = useState<number>();
  // const socket: Socket<ServerToClientEvents, ClientToServerEvents> = useMemo(() => {
  //   return io(host, {
  //     withCredentials: true,
  //     auth: {
  //       token,
  //     },
  //   });
  // }, []);

  // const socketRef = useRef(socket);

  // useEffect(() => {
  //   socketRef.current.connect();
  //   socketRef.current.on('sendDataServer', (event) => {
  //     console.log(event);
  //   });
  //   return () => {
  //     socketRef.current.disconnect();
  //   };
  // }, []);

  // let timeout: NodeJS.Timeout;

  // const onChange = (value: React.ChangeEvent<HTMLInputElement>) => {
  //   clearTimeout(timeout);
  //   timeout = setTimeout(() => {
  //     const data = { id, user: 'test', text: value.target.value };
  //     console.log('Send to server', data);
  //     if (data.text) {
  //       socketRef.current.emit('sendDataClient', data);
  //     }
  //   }, 300);
  // };

  const onSelect = (value: number) => {
    setId(value);
  };

  return <MainLayout>xd</MainLayout>;
}

export default App;
