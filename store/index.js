export const state = () => ({
  loadedPost: []
})

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  }
}

export const actions = {
  nuxtServerInit(vuexContext, context) {

  },
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  }
}

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}
