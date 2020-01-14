import Vue from "vue";
import App from "./App.vue";
import VueTimeago from "vue-timeago";

Vue.config.productionTip = false;

Vue.use(VueTimeago, {
  name: "Timeago",
  locale: "en",
  locales: {
    en: require("date-fns/locale/en"),
    es: require("date-fns/locale/es"),
    fr: require("date-fns/locale/fr"),
    pt: require("date-fns/locale/pt"),
    nl: require("date-fns/locale/nl"),
    it: require("date-fns/locale/it"),
    da: require("date-fns/locale/da"),
    de: require("date-fns/locale/de"),
    zh: require("date-fns/locale/zh_cn"),
    ro: require("date-fns/locale/ro"),
    nb: require("date-fns/locale/nb"),
    sv: require("date-fns/locale/sv"),
    fi: require("date-fns/locale/fi"),
    id: require("date-fns/locale/id"),
    hu: require('date-fns/locale/hu')
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
