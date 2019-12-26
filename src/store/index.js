import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Vuex might have been unnecessary for a project this small, but I really like the idea
// of using a global state management system if I'm sharing lots of data across components.
// It prevents me from crowding my main App.vue file with a bunch of logic, helps me avoid using
// something like an event bus, and makes the app more scalable and easier to debug
export default new Vuex.Store({
  state: {
    clickedSquares: []
  },
  // No async logic, so mutations seems like the logical choice over actions
  mutations: {
    addToClickedSquares(state, payload) {
      state.clickedSquares.push(payload);
    }
  }
});
