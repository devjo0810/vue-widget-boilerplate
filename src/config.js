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
  MENU_PREFIX: "Wm",
};

const DIALOG_TYPE = {
  ALERT: 1,
  CONFIRM: 2,
};

const TOAST = {
  TIMEOUT: 5000, // 5s
  TYPE: {
    OK: 1,
    INFO: 2,
    WARNING: 3,
    DANGER: 4,
  },
};
TOAST.CLASS = {
  [TOAST.TYPE.OK]: "ok",
  [TOAST.TYPE.INFO]: "info",
  [TOAST.TYPE.WARNING]: "warning",
  [TOAST.TYPE.DANGER]: "danger",
};
TOAST.ICON = {
  [TOAST.TYPE.OK]: "circle-check",
  [TOAST.TYPE.INFO]: "circle-info",
  [TOAST.TYPE.WARNING]: "triangle-exclamation",
  [TOAST.TYPE.DANGER]: "circle-xmark",
};

const TUI_GRID = {
  ROW_HEIGHT: 30,
  MIN_ROW_HEIGHT: 30,
  HEADER: { height: 30 },
  ROW_HEADERS: ["rowNum"],
  COLUMN_OPTIONS: { resizable: true, minWidth: 70 },
  default() {
    return {
      rowHeight: this.ROW_HEIGHT,
      minRowHeight: this.MIN_ROW_HEIGHT,
      header: this.HEADER,
      rowHeaders: this.ROW_HEADERS,
      columnOptions: this.COLUMN_OPTIONS,
    };
  },
};

const TUI_TO_DAYJS = {
  "yyyy-MM-dd": "YYYY-MM-DD",
};

const SEARCH = {
  TYPE: {
    DATE: "date",
    TEXT: "text",
    SELECT: "select",
    BUTTON: "button",
  },
};
SEARCH.COMPO_NAME = {
  [SEARCH.TYPE.DATE]: "SearchDateBox",
  [SEARCH.TYPE.TEXT]: "SearchTextBox",
  [SEARCH.TYPE.SELECT]: "SearchSelectBox",
  [SEARCH.TYPE.BUTTON]: "CommonTextButton",
};

export {
  debug,
  APP,
  API_CONFIG,
  HTTP_STATUS,
  WIDGET,
  DIALOG_TYPE,
  TOAST,
  TUI_GRID,
  TUI_TO_DAYJS,
  SEARCH,
};
