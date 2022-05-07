// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// // Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     user_public_key: "",
//     api_base_url: "http://185.132.38.217:4000",
//   },
//   actions: {
//     SAVE_PUBLIC_KEY: function ({ commit }) {
//       commit('SET_PUBLIC_KEY', 'asdasgakjasl');
//     }
//   },
//   mutations: {
//     SET_PUBLIC_KEY: (state, { input }) => {
//       state.user_public_key =  input;
//     }
//   },
//   getters: {
//     openProjects: state => {
//       return state.projects.filter(project => !project.completed)
//     }
//   }
// })
// export default store

import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user_public_key: "",
      api_base_url: "http://185.132.38.217:4000",
    }
  },
  mutations: {
    SET_PUBLIC_KEY: (state, { input }) => {
      state.user_public_key =  input;
    }
  }
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)