// init state
const state = () => ({
  cat: '',
})

// mutations
const mutations = {
  setCat(state, data) {
    state.cat = data;
  }
}

// actions
const actions = {
  getCat({ commit }) {
    let id = 'kksskkss';
    commit('setCat', id);
  }
}

export default {
  // namespaced: true,
  state,
  actions,
  mutations,
}
