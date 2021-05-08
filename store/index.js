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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: '1',
              title: 'پست شماره ۱',
              thumbnailLink: 'https://www.bbva.com/wp-content/uploads/2017/08/innovacion-bbva-100817-1024x551.jpg',
              previewText: 'محتوای شماره 1'
            },
            {
              id: '2',
              title: 'پست شماره ۲',
              thumbnailLink: 'https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:362/h:181/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg',
              previewText: 'محتوای شماره ۲'
            },
            {
              id: '3',
              title: 'پست شماره ۳',
              thumbnailLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKimrjFWdSL-1d7EGY0excHnxtFU0AN29WNw&usqp=CAU',
              previewText: 'محتوای شماره ۳'
            }
          ] 
        })
      }, 1500)
    })
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
