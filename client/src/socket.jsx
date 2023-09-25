import socketIOClient from 'socket.io-client';
import serverBasePath from '../constants';

let socket;

export const getSocket = () => {
  // If socket already exist, return it. Otherwise create a new one.
  if (!socket) {
    socket = socketIOClient(serverBasePath);
  }
  return socket;
}