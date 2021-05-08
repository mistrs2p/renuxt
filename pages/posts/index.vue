<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  asyncData(context) {
    console.log('AsyncData Is Executed!')
    // console.log(context)

    // This Line Below Tell Nuxt It Should Wait For It To Resolve
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // callback(new Error, {
        //  Or this
        // callback(null, {
        //  Or this
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
      // reject(new Error())
    })
      // When It Resolved Then Below
      .then(data => {
        // data Here Is My Posts
        return data
      })
      .catch(e => {
        context.error(e)
      })

  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
    // console.log(this.$store.getters.loadedPosts)
  }
}
</script>

<style scoped>
  .post-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>