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
  HEADER_HEIGHT: 36, // 32 + border
  MENU_PREFIX: "WidgetMenu",
};

const DIALOG_TYPE = {
  ALERT: 1,
  CONFIRM: 2,
};

const TOAST = {
  TIMEOUT: 5000, // 5s
  TYPE: {
    PRIMARY: 1,
    INFO: 2,
    WARNING: 3,
    DANGER: 4,
    CLASS: {
      1: "primary",
      2: "info",
      3: "warning",
      4: "danger",
    },
    ICON: {
      1: "circle-check",
      2: "circle-info",
      3: "triangle-exclamation",
      4: "circle-xmark",
    },
  },
};

export { debug, APP, API_CONFIG, HTTP_STATUS, WIDGET, DIALOG_TYPE, TOAST };
