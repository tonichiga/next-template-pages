import constants from "@/shared/constants";
import Manager from "./Manager";
import { v4 as uuidv4 } from "uuid";

const Constants = {
  CHANGE: "change",
  CLOSE: "close",
};

class PopupManager extends Manager {
  constructor() {
    super();
  }

  create(name: string, data) {
    this.name = name;
    this.data = data;
    this.emitChange();
  }

  call(name: string, data: any = {}) {
    this.create(name, { modalId: uuidv4(), data });
  }

  close(position: number | string) {
    this.emitClose(position);
  }

  emitClose<T>(position?: T) {
    this.emitter.emit(Constants.CLOSE, position);
  }
}

const popup = new PopupManager();
export default popup;
