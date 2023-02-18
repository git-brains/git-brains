import { createLogger, createStore } from 'vuex'
import providers from './providers'

const store = createStore({
  modules: {
    providers
  }
  , plugins: [createLogger()]
})

export default store
