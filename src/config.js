const debug = process.env.NODE_ENV !== "production";

const APP = {
  version: process.env.VUE_APP_VERSION,
  title: process.env.VUE_APP_TITLE,
};

const API_CONFIG = {
  baseUrl: process.env.VUE_APP_API_BASE_URL,
  timeout: 100000,
  debug: debug,
};

const HTTP_STATUS = {
  ok: "200",
  notFound: "404",
};

const WIDGET = {
  MIN_WIDTH: 300,
  MIN_HEIGHT: 300,
  DRAG_HANDLE: ".widget-drag-handle",
  HEADER_HEIGHT: 34, // 32 + 1 + 1
};

const DIALOG_TYPE = {
  ALERT: 1,
  CONFIRM: 2,
};

export { debug, APP, API_CONFIG, HTTP_STATUS, WIDGET, DIALOG_TYPE };
