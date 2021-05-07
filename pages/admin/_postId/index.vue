<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
export default {
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

<style>

</style>