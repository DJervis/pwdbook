import { createStore, createLogger } from 'vuex'
import cat from './modules/cat'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    cat,
  },
  getters: {
    cat: state => state.cat.cat,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
