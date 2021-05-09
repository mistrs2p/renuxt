<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  methods: {
    onSubmitted(postData) {
      this.$axios.$post('https://nuxt-blog-fcdb2-default-rtdb.firebaseio.com/posts.json', postData)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  .new-post-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-post-form {
      width: 500px;
    }
  }
</style>