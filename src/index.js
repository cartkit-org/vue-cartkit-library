import SalesPop from "./components/Advanced/SalesPop";
import Button from "./components/General/Button.vue";
import Loader from "./components/General/Loader.vue";
import Divider from "./components/Layout/Divider.vue";
import EmptyState from "./components/Layout/EmptyState.vue";

// Export components individually
export { SalesPop, Button, Loader, Divider, EmptyState };

// What should happen if the user installs the library as a plugin
function install(Vue) {
  Vue.component("cartkit-salespop", SalesPop);
  Vue.component("cartkit-button", Button);
  Vue.component("cartkit-loader", Loader);
  Vue.component("cartkit-divider", Divider);
  Vue.component("cartkit-empty-state", EmptyState);
}

// Export the library as a plugin
export default { install: install };
