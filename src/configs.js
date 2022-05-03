import { MESSAGE_RSOCKET_COMPOSITE_METADATA } from "rsocket-core";


export const rSocketConfig = {
    dataMimeType: "application/json",
    metadataMimeType: MESSAGE_RSOCKET_COMPOSITE_METADATA.string,
    keepAlive: 100000,
    lifetime: 50000
}