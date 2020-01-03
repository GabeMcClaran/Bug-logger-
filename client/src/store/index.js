import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _sandbox = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 6000
});
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: []
  },

  mutations: {
    setAllBugs(state, data) {
      state.bugs = data;
    },
    setActiveBug(state, bug) {
      state.activeBug = bug;
      // console.log(bug);
    },
    addBug(state, data) {
      state.bugs.push(data);
    }
  },
  actions: {
    async getAllBugs({ commit, dispatch }) {
      // debugger;
      let res = await _sandbox.get("bugs");
      commit("setAllBugs", res.data);
      console.log(this.state.bugs);
    },
    setActiveBug({ commit, dispatch }, bug) {
      commit("setActiveBug", bug);
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _sandbox.post("bugs", bug);
      commit("addBug", res.data);
    },

    async close({ commit, dispatch }, id) {
      await _sandbox.delete("bugs/" + id);
      dispatch("getAllBugs");
    }
  },
  modules: {}
});
