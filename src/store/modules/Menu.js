const sampleMenuList = [
  {
    title: "Signup",
    compoName: "Signup",
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
  },
  {
    title: "TextEllipsisTitleTest_ABCDE",
    compoName: "TextEllipsisTitleTest",
    isOnlyOne: true,
  },
  {
    parentMenuId: "0",
    menuId: "1",
    sortSqnc: 1,
    title: "사용자 관리",
    compoName: null,
    isMenu: false,
    menuList: [
      {
        parentMenuId: "1",
        menuId: "101",
        title: "사용자 추가",
        compoName: "AddUser",
        isMenu: true,
      },
      {
        parentMenuId: "1",
        menuId: "101",
        title: "사용자 추가",
        compoName: "AddUser",
        isMenu: true,
      },
      {
        parentMenuId: "1",
        menuId: "101",
        title: "사용자 추가",
        compoName: "AddUser",
        isMenu: true,
      },
    ],
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
