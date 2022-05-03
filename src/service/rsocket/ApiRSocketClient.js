import { BufferEncoders } from "rsocket-core";
import { RSocketClient } from "rsocket-core";
import RSocketWebSocketClient from "rsocket-websocket-client/build/RSocketWebSocketClient";
import { WebSocket } from "ws";
import { rSocketConfig } from "src/configs";
import { CommonResponder } from "src/service/rsocket/CommonResponder";


export const createRSocketClient = (host, port, responder = CommonResponder) => new RSocketClient({
    transport: new RSocketWebSocketClient(
        {
            url: `ws://${host}:${port}`,
            wsCreator: (url) => new WebSocket(url),
            debug: true
        }, BufferEncoders
    ),
    setup: {
        ...rSocketConfig
    },
    responder: {...responder}
})