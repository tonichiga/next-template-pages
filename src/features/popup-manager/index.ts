import modal from "./dist/service/ModalManager";
import popup from "./dist/service/PopupManager";
import notification from "./dist/service/NotificationManager";
import modalActions from "./dist/config/modal/modal-actions";
import popupActions from "./dist/config/popup/popup-actions";
import notificationActions from "./dist/config/notification/notification-actions";
import ModalProvider from "./dist/components/modal/modal-provider";
import PopupProvider from "./dist/components/popup/popup-provider";
import NotificationProvider from "./dist/components/notification/notification-provider";

export {
  modalActions,
  popupActions,
  notificationActions,
  modal,
  popup,
  notification,
  ModalProvider,
  PopupProvider,
  NotificationProvider,
};
