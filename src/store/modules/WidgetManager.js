/**
 * Widget Define
 * id : 고유키
 * title : 위젯 타이틀
 * compoName : 매핑할 컴포넌트명
 * compoData : 매핑할 컴포넌트 props
 * x : x좌표
 * y : y좌표
 * w : width
 * h : height
 * bfX : 이전 x좌표
 * bfY : 이전 y좌표
 * bfW : 이전 width
 * bfH : 이전 height
 * zindex : 위젯 order index
 * isOnlyOne : 위젯 전체중 한개만 유지여부
 * isFullSize : 전체스크린 여부
 * isMinimize : 최소화 여부
 * isWindowPopup : 윈도우 팝업 여부
 * spinner : spinner on/off
 */
const state = {
  widgetList: [],
  widgetPosition: {
    x: 10,
    y: 10,
  },
  isParent: true,
};

const getters = {
  getWidgetList(state) {
    return state.widgetList;
  },
  getWidgetById: (state) => (id) => {
    return state.widgetList.find((item) => item.id === id);
  },
  getMaxZindexId(state) {
    const maxZindex = getMaxZindex(state);
    const widget = state.widgetList.find((item) => item.zindex === maxZindex);
    return widget ? widget.id : null;
  },
  getIsParent(state) {
    return state.isParent;
  },
  getWidgetPosition(state) {
    return state.widgetPosition;
  },
};

const mutations = {
  initWidgetList(state) {
    state.widgetList = [];
  },
  initWidgetPosition(state) {
    state.widgetPosition = {
      x: 10,
      y: 10,
    };
  },
  setNextWidgetPosition(state) {
    const { x, y } = state.widgetPosition;
    state.widgetPosition.x = x + 10;
    state.widgetPosition.y = y + 10;
  },
  addWidget(state, widget) {
    state.widgetList.push({
      w: 300,
      h: 300,
      isOnlyOne: false,
      isFullSize: false,
      isMinimize: false,
      isWindowPopup: false,
      spinner: false,
      ...widget,
      id: createWidgetKey(),
      zindex: getNextZindex(state),
      x: state.widgetPosition.x,
      y: state.widgetPosition.y,
    });
  },
  setWidget(state, { id, ...props }) {
    const widget = state.widgetList.find((item) => item.id === id);
    Object.keys(props).forEach((key) => {
      widget[key] = props[key];
    });
  },
  delWidget(state, { id }) {
    const widgetIndex = state.widgetList.findIndex((item) => item.id === id);
    state.widgetList.splice(widgetIndex, 1);
  },
  saveBfPositionAndSize(state, { id }) {
    const widget = state.widgetList.find((item) => item.id === id);
    const { x, y, w, h } = widget;
    widget.bfX = x;
    widget.bfY = y;
    widget.bfW = w;
    widget.bfH = h;
  },
  setIsParent(state, isParent) {
    state.isParent = isParent;
  },
  setSpinner(state, { id, spinner }) {
    const widget = state.widgetList.find((item) => item.id === id);
    widget.spinner = spinner;
  },
};

const actions = {
  // 위젯 생성
  createWidget({ state, commit, dispatch }, widgetOption) {
    const { isOnlyOne, compoName } = widgetOption;
    // onlyOne 옵션이 있는 컴포넌트일 경우 기존 위젯 종료후 생성
    if (isOnlyOne) {
      const widget = state.widgetList.find(
        (item) => item.compoName === compoName
      );
      if (widget) {
        dispatch("closeWidget", widget.id);
      }
    }
    commit("addWidget", widgetOption);
    commit("setNextWidgetPosition");
  },
  // 위젯 zindex값 정렬
  sortWidgetZindex({ state, commit }, id) {
    const maxZindex = getMaxZindex(state);
    const maxZindexId = state.widgetList.find(
      (item) => item.zindex === maxZindex
    ).id;
    if (id === maxZindexId) return;

    const currentZindex = state.widgetList.find(
      (item) => item.id === id
    ).zindex;
    commit("setWidget", { id, zindex: maxZindex });
    const decreWidgetList = state.widgetList.filter(
      (item) => item.id !== id && item.zindex > currentZindex
    );
    for (const widget of decreWidgetList) {
      commit("setWidget", { id: widget.id, zindex: widget.zindex - 1 });
    }
  },
  // 위젯 zindex값 정렬 역순
  sortWidgetZindexReverse({ state, commit }, id) {
    const minZindex = getMinZindex(state);
    const minZindexId = state.widgetList.find(
      (item) => item.zindex === minZindex
    ).id;
    if (id === minZindexId) return;

    const currentZindex = state.widgetList.find(
      (item) => item.id === id
    ).zindex;
    commit("setWidget", { id, zindex: minZindex });
    const increWidgetList = state.widgetList.filter(
      (item) => item.id !== id && item.zindex < currentZindex
    );
    for (const widget of increWidgetList) {
      commit("setWidget", { id: widget.id, zindex: widget.zindex + 1 });
    }
  },
  // 위젯 종료
  closeWidget({ commit }, id) {
    const currentZindex = state.widgetList.find(
      (item) => item.id === id
    ).zindex;
    commit("delWidget", { id });
    const decreWidgetList = state.widgetList.filter(
      (item) => item.zindex > currentZindex
    );
    for (const widget of decreWidgetList) {
      commit("setWidget", { id: widget.id, zindex: widget.zindex - 1 });
    }
  },
  // 위젯 전체화면
  fullSizingWidget({ commit, dispatch }, { id, w, h }) {
    dispatch("sortWidgetZindex", id);
    commit("saveBfPositionAndSize", { id });
    commit("setWidget", {
      id,
      w,
      h,
      isFullSize: true,
      isMinimize: false,
      x: 0,
      y: 0,
    });
  },
  // 위젯 창화면
  smallSizingWidget({ state, commit, dispatch }, id) {
    dispatch("sortWidgetZindex", id);
    const { bfX, bfY, bfW, bfH } = loadBfPositionAndSize(state, id);
    // 위치는 이전으로 안돌아감..
    commit("setWidget", {
      id,
      isFullSize: false,
      x: bfX,
      y: bfY,
      w: bfW,
      h: bfH,
    });
  },
  // 위젯 위치 업데이트
  updateWidgetPosition({ commit, dispatch }, { id, x, y }) {
    dispatch("sortWidgetZindex", id);
    commit("setWidget", { id, x, y });
  },
  // 위젯 사이즈 및 위치 업데이트
  updateWidgetSize({ commit, dispatch }, { id, x, y, w, h }) {
    dispatch("sortWidgetZindex", id);
    commit("setWidget", { id, x, y, w, h });
  },
  // 위젯 최소화
  minimizingWidget({ commit }, id) {
    commit("setWidget", { id, isMinimize: true });
  },
  // 위젯 최소화 취소
  cancelMinimizingWidget({ commit, dispatch }, id) {
    dispatch("sortWidgetZindex", id);
    commit("setWidget", { id, isMinimize: false });
  },
  // 위젯 최소화 토글링
  toggleMinimizingWidget({ state, dispatch }, id) {
    const maxZindex = getMaxZindex(state);
    const widget = state.widgetList.find((item) => item.id === id);
    const { isMinimize, zindex } = widget;
    // 최상단 위젯이 아닐경우 위로올림
    if (maxZindex !== zindex) {
      dispatch("sortWidgetZindex", id);
      dispatch("cancelMinimizingWidget", id);
      return;
    }
    // 위젯 토글링
    if (isMinimize) {
      dispatch("cancelMinimizingWidget", id);
    } else {
      dispatch("minimizingWidget", id);
    }
  },
  onSpinner({ commit }, id) {
    commit("setSpinner", { id, spinner: true });
  },
  offSpinner({ commit }, id) {
    commit("setSpinner", { id, spinner: false });
  },
  // 위젯 초기화
  initWidget({ commit }) {
    commit("initWidgetList");
    commit("initWidgetPosition");
  },
  toggleWidgetParent({ state, commit }) {
    commit("setIsParent", !state.isParent);
  },
};

// 위젯 고유키 생성
function createWidgetKey() {
  return new Date().getTime().toString();
}

// 위젯 zindex 최대값 조회
function getMaxZindex(state) {
  const zindexList = state.widgetList.map((item) => item.zindex);
  return zindexList.length ? Math.max(...zindexList) : 0;
}

// 위젯 다음 zindex값 조회
function getNextZindex(state) {
  return getMaxZindex(state) + 1;
}

// 위젯 zindex 최소값 조회
function getMinZindex(state) {
  const zindexList = state.widgetList.map((item) => item.zindex);
  return zindexList.length ? Math.min(...zindexList) : 0;
}

// 위젯 이전 위치 및 사이즈 불러오기
function loadBfPositionAndSize(state, id) {
  const widget = state.widgetList.find((item) => item.id === id);
  const { bfX, bfY, bfW, bfH } = widget;
  return { bfX, bfY, bfW, bfH };
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
