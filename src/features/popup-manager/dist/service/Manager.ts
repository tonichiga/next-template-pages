import { EventEmitter } from "events";

const Constants = {
  CHANGE: "change",
  CLOSE: "close",
};

type TData = {
  [key: string]: any;
};

class Manager {
  name: string | null;
  data: TData;
  emitter: EventEmitter;

  constructor() {
    this.name = null;
    this.data = {};
    this.emitter = new EventEmitter();
  }

  create<T>(name: string, data?: T) {
    this.name = name;
    this.data = data;
    this.emitChange();
  }

  call<T>(name: string, data?: T) {
    this.create(name, data);
  }

  /**
   * @param {number[]} closeList - list of modal indexes to close
   */

  close(...closeList: number[]) {
    this.name = null;
    this.data = {};
    this.emitClose(closeList);
  }

  emitChange() {
    this.emitter.emit(Constants.CHANGE, this.name, this.data);
  }

  emitClose<T>(closeList?: T) {
    this.emitter.emit(Constants.CLOSE, closeList);
  }

  addChangeListener(listener, callback) {
    this.emitter.addListener(listener, callback);
  }

  removeChangeListener(listener, callback) {
    this.emitter.removeListener(listener, callback);
  }
}

export default Manager;
