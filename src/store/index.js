import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
 // actions,
  getters,
  state,
  mutations
 // strict: debug,
 // plugins: debug ? [createLogger()] : []
});