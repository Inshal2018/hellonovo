import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import VueApexCharts from "vue3-apexcharts";
import PerfectScrollbar from "vue3-perfect-scrollbar";
// import store from "./store";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
// import "flowbite";
import "./assets/tailwind.css";
import "./assets/animate.css";
import "./assets/sass/css/windzo.css";

import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      // user_public_key: null,
      user_public_key: '',
      api_base_url: "http://185.132.38.217:4000",
    }
  },
  mutations: {
    setPublicKey: (state,  public_key) => {
      state.user_public_key =  public_key;
    }
  },
  actions: {
    logout({ commit }) {
      commit('setPublicKey', null);
    }
  }
})

const app = createApp(App);
app.use(router, Icon);
app.use(VueApexCharts);
app.use(PerfectScrollbar);
app.use(store);
app.mount("#app");

router.beforeEach((to, from, next) => {
  document.querySelector(".flex-sidebar").classList.add("hidden");
  next();
});
