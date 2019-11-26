import SalesPop from "./components/SalesPop";

// Export components individually
export { SalesPop };

// What should happen if the user installs the library as a plugin
function install(Vue) {
  Vue.component("cartkit-salespop", SalesPop);
}

// Export the library as a plugin
export default { install: install };
