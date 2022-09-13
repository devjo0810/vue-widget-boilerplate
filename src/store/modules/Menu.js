const sampleMenuList = [
  {
    title: "Signup",
    compoName: "Signup",
    w: 500,
    h: 400,
  },
  {
    title: "Grid",
    compoName: "Grid",
  },
  {
    title: "Tree",
    compoName: "Tree",
  },
  {
    title: "Card",
    compoName: "Card",
    spinner: true,
  },
  {
    title: "TextEllipsisTitleTest_ABCDE",
    compoName: "TextEllipsisTitleTest",
    isOnlyOne: true,
  },
];

const state = {
  widgetMenuList: [...sampleMenuList],
};

const getters = {
  getWidgetMenuList(state) {
    return state.widgetMenuList;
  },
};

const mutations = {
  setWidgetMenuList(state, widgetMenuList) {
    state.widgetMenuList = [...widgetMenuList];
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
