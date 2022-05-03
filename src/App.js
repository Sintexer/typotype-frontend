import { useState } from "react";
import { BufferEncoders, encodeCompositeMetadata, encodeRoute, MESSAGE_RSOCKET_COMPOSITE_METADATA, MESSAGE_RSOCKET_ROUTING, RSocketClient } from "rsocket-core";
import RSocketWebsocketClient from 'rsocket-websocket-client';


function App() {
  const [inputValue, setInputValue] = useState("");
  // useEffect(() => {connect()}, [])
  return (
    <div>
      <h1>Hello world</h1>
      <input type="text" value={inputValue} onChange={e => setInputValue(+e.target.value || inputValue)}></input>
      <button onClick={() => connect(inputValue)}>Send</button>
    </div>
  );
}

export default App;


const handleSubmit = (value) => {

}

const maxRSocketRequestN = 2147483647;
const keepAlive = 1000000;
const lifetime = 500000;
const dataMimeType = "application/json";
const metadataMimeType = MESSAGE_RSOCKET_COMPOSITE_METADATA.string;
const route = 'stream';

const client = new RSocketClient({
  setup: {
    dataMimeType,
    keepAlive,
    lifetime,
    metadataMimeType,
    metadata: encodeCompositeMetadata([
      [MESSAGE_RSOCKET_ROUTING, encodeRoute(route)]
    ])
  },
  transport: new RSocketWebsocketClient(
    {
      debug: true,
      url: 'ws://localhost:7000',
      wsCreator: url => new WebSocket(url),
    },
    BufferEncoders,
  ),
});

const connect = (message) => client.connect().then(
  socket => {
    // observe rsocket status
    // eslint-disable-next-line no-console
    socket.connectionStatus().subscribe(event => console.log(event));
    requestStream(socket, message)
  },
  error => {
    // handle connection error
    // eslint-disable-next-line no-console
    console.log('error:', error);
  },
);

const requestStream = (sender, inputData) => sender
  .requestStream({
    metadata: encodeCompositeMetadata([
      [MESSAGE_RSOCKET_ROUTING, encodeRoute(route)]
    ])
  })
  .subscribe({
    // eslint-disable-next-line no-console
    onComplete: () => console.log('Request-stream completed'),
    onError: error =>
      console.error(`Request-stream error:${error.message}`),
    // eslint-disable-next-line no-console
    onNext: value => console.log('%s %s', value.data, value.metadata),
    onSubscribe: sub => sub.request(maxRSocketRequestN),
  });