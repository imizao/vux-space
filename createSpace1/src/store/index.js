import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  jinwen: 0,
  name: 'lai jin wen',
  count: 0
}

const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement')
}

const mutations = {
  increment (state) {
    state.count = state.count + 5
  },
  decrememt (state) {
    state.count = state.count - 3
  }
}

const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})