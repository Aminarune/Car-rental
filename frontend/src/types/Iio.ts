export interface ServerToClientEvents {
  noArg: () => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  sendDataServer: ({ data }: any) => void;
  sendDataClient: (d: any) => void;
}

export interface ClientToServerEvents {
  hello: (data: any) => void;
  sendDataClient: (d: any) => void;
}
