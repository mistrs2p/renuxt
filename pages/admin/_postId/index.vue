<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      loadedPost: {
      author: 'مهدی',
      title: 'عنوان',
      thumbnailLink: 'لینک عکس',
      content: 'محتوا'
      }
    }
  },
}
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }
  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>