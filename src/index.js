import SalesPop from "./components/SalesPop";
import Button from "./components/General/Button.vue";
import Loader from "./components/General/Loader.vue";

// Export components individually
export { SalesPop, Button, Loader };

// What should happen if the user installs the library as a plugin
function install(Vue) {
  Vue.component("cartkit-salespop", SalesPop);
  Vue.component("cartkit-button", Button);
  Vue.component("cartkit-loader", Loader);
}

// Export the library as a plugin
export default { install: install };
