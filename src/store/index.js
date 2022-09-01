import Vue from "vue";
import Vuex from "vuex";
import Menu from "./modules/Menu";
import WidgetManager from "./modules/WidgetManager";
import Popup from "./modules/Popup";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Menu,
    WidgetManager,
    Popup,
  },
});
