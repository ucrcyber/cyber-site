import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      pageTitle: 'Cybersecurity at UCR',
      pageDescription: 'Cyber@UCR'
    },
    mutations: {
      SET_PAGE_TITLE(state, title) {
        state.pageTitle = title
      },

      SET_PAGE_DESCRIPTION(state, description) {
        state.pageDescription = description
      }
    }
  })
}

export default createStore
