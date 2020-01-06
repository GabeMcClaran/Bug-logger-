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
    notes: [],
    activeNote: {}
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
    },
    addNotes(state, data) {
      state.notes.push(data);
      // console.log(data);
    },
    setNotes(state, data) {
      state.notes = data;
    }
  },
  actions: {
    async getAllBugs({ commit, dispatch }) {
      // debugger;
      let res = await _sandbox.get("bugs");
      commit("setAllBugs", res.data);
      // console.log(this.state.bugs);
    },

    async getBugById({ commit, dispatch }, id) {
      let res = await _sandbox.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    setActiveBug({ commit, dispatch }, bug) {
      commit("setActiveBug", bug);
    },
    async createBug({ commit, dispatch }, bug) {
      let res = await _sandbox.post("bugs", bug);
      commit("setActiveBug", res.data);
      // console.log(res.data);
      return res.data.id;
    },

    async close({ commit, dispatch }, id) {
      let res = await _sandbox.delete("bugs/" + id);
      dispatch("getBugById", id);
    },
    async getNotes({ commit, dispatch }, id) {
      let res = await _sandbox.get("bugs/" + id + "/notes");
      console.log(res.data);

      commit("setNotes", res.data);
      // console.log("here i am", res.data);
    },
    async createNote({ commit, dispatch }, payload) {
      let res = await _sandbox.post("notes", payload);
      commit("addNote", res.data);
      // console.log("from store", res.data);
    }
  },
  modules: {}
});
