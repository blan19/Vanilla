import { Server, DataStore } from "../index";

export class Client {
  store: DataStore = {
    timestamp: 0,
    data: undefined,
  };

  constructor(public server: Server) {}

  synchronize(): void {
    const updatedStore = this.server.getData(this.store.timestamp);
    if (updatedStore) this.store = updatedStore;
  }

  update(data: string): void {
    this.store.data = data;
    this.store.timestamp = Date.now();
  }
}
