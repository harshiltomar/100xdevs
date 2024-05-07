import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState("");

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:8080");
    newSocket.onopen = () => {
      console.log("Connection established");
      newSocket.send("Hello Server!");
    };
    newSocket.onmessage = (message) => {
      console.log("Message received:", message.data);
      setLatestMessage(message.data);
    };
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  if (!socket) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <input></input>
      <button
        onClick={() => {
          socket.send("Hello Guys !");
        }}
      >
        Send
      </button>
      {latestMessage}
    </>
  );
}

export default App;

// "use client"
// import { useEffect, useState } from 'react'

// export default function() {
//   const [socket, setSocket] = useState<WebSocket | null>(null);

//   useEffect(() => {
//     const newSocket = new WebSocket('ws://localhost:8080');
//     newSocket.onopen = () => {
//       console.log('Connection established');
//       newSocket.send('Hello Server!');
//     }
//     newSocket.onmessage = (message) => {
//       console.log('Message received:', message.data);
//     }
//     setSocket(newSocket);
//     return () => newSocket.close();
//   }, [])

//   return (
//     <>
//       hi there
//     </>
//   )
// }
