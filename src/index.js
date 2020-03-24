import SalesPop from "./components/Advanced/SalesPop";
import Button from "./components/General/Button";
import Loader from "./components/General/Loader";
import Divider from "./components/Layout/Divider";
import EmptyState from "./components/Layout/EmptyState";
import Card from "./components/DataDisplay/Card";

// Export components individually
export { SalesPop, Button, Loader, Divider, EmptyState, Card };

// What should happen if the user installs the library as a plugin
function install(Vue) {
  Vue.component("cartkit-salespop", SalesPop);
  Vue.component("cartkit-button", Button);
  Vue.component("cartkit-loader", Loader);
  Vue.component("cartkit-divider", Divider);
  Vue.component("cartkit-empty-state", EmptyState);
  Vue.component("cartkit-card", Card);
}

// Export the library as a plugin
export default { install: install };
