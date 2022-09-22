import Vue from "vue";
/* font-awesome-icon */
import "./font-awesome-icon";
/* vue-draggable-resizable */
import "vue-draggable-resizable/dist/VueDraggableResizable.css";
/* widget-handler */
import widgetHandler from "./widget-handler";
/* toast-handler */
import toastHandler from "./toast-handler";
/* TOAST UI Grid */
import "./tui-grid";

Vue.use(widgetHandler);
Vue.use(toastHandler);
