import Vue from "vue";
import Vuex from "vuex";
import axiosAuth from "./axios-auth";
import axios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    storeToken(state, userData) {
      state.idToken = userData.idToken;
      state.userId = userData.userId;
    },
    storeUser(state, userData) {
      state.user = userData;
    },
    clearAuthData(state) {
      state.idToken = state.userId = state.user = null;
    }
  },
  actions: {
    setLogoutTimer({ commit, dispatch }, expirationTime) {
      setTimeout(() => {
        dispatch("logout");
      }, expirationTime * 1000);
    },
    signup({ commit, dispatch }, userData) {
      axiosAuth
        .post("/signupNewUser?key=AIzaSyAya1A6omFRD-7I4s3QTehDw5SFioP2Vn4", {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true
        })
        .then(response => {
          // console.log(response);
          const data = response.data;
          commit("storeToken", {
            idToken: data.idToken,
            userId: data.localId
          });
          const now = new Date();
          const expirationDate = now.getTime() + data.expiresIn * 1000;
          localStorage.setItem("idToken", data.idToken);
          localStorage.setItem("userId", data.localId);
          localStorage.setItem("expiresIn", new Date(expirationDate));
          dispatch("storeUser", userData);
          dispatch("setLogoutTimer", data.expiresIn);
        })
        .catch(error => console.log(error));
    },
    login({ commit, dispatch }, userData) {
      // console.log(userData);
      axiosAuth
        .post("/verifyPassword?key=AIzaSyAya1A6omFRD-7I4s3QTehDw5SFioP2Vn4", {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true
        })
        .then(response => {
          const data = response.data;
          commit("storeToken", {
            idToken: data.idToken,
            userId: data.localId
          });
          const now = new Date();
          const expirationDate = now.getTime() + data.expiresIn * 1000;
          localStorage.setItem("idToken", data.idToken);
          localStorage.setItem("userId", data.localId);
          localStorage.setItem("expiresIn", new Date(expirationDate));
          dispatch("setLogoutTimer", data.expiresIn);
          router.push({ path: "/dashboard" });
        })
        .catch(error => console.log(error));
    },
    tryAutoLogin({ commit }) {
      const idToken = localStorage.getItem("idToken");
      if (!idToken) {
        return;
      }
      const expirationDate = localStorage.getItem("expirationDate");
      if (new Date().now >= expirationDate) {
        return;
      }
      const userId = localStorage.getItem("userId");
      commit("storeToken", {
        idToken,
        userId
      });
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      axios
        .post(`/users.json?auth=${state.idToken}`, userData)
        .then(response => {
          // console.log("After storing user data", response);
        })
        .catch(error => console.log(error));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      axios
        .get(`/users.json?auth=${state.idToken}`)
        .then(response => {
          // console.log(response);
          const data = response.data;
          const users = [];
          Object.keys(data).map(e => {
            const user = data[e];
            user.id = e;
            users.push(user);
            // this.email = users[0].email;
          });
          // console.log(users);
          commit("storeUser", users[0]);
        })
        .catch(error => console.log(error));
    },
    logout({ commit }) {
      commit("clearAuthData");
      localStorage.removeItem("idToken");
      localStorage.removeItem("expiresIn");
      localStorage.removeItem("userId");
      router.replace("/");
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken != null;
    }
  }
});
