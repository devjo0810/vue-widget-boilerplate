import { TOAST } from "@/config";
import { createKey } from "@/utils/util";

/**
 * Toast Define
 * id : Toast 고유키
 * message : toast message
 * type : [primary, info, warning, danger]
 */
const state = {
  toastList: [],
};

const getters = {
  getToastList(state) {
    return state.toastList;
  },
};

const mutations = {
  addToast(state, toast) {
    state.toastList.push({
      ...toast,
      id: createKey(),
    });
  },
  delToast(state) {
    state.toastList.shift();
  },
};

const actions = {
  // 토스트메세지 생성
  createToast({ commit }, { message, type }) {
    commit("addToast", { message, type });
    delToastTimeoutAfter(commit); // 삭제예약
  },
};

function delToastTimeoutAfter(commit) {
  setTimeout(() => {
    commit("delToast");
  }, TOAST.TIMEOUT);
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
