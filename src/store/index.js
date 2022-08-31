import Vue from "vue";
import Vuex from "vuex";
import Menu from "./modules/Menu";
import WidgetManager from "./modules/WidgetManager";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Menu,
    WidgetManager,
  },
});
