<template>
  <div class="admin-page">
    <section class="new-post">
      <button @click="$router.push('admin/new-post')">ایجاد پست جدید</button>
    </section>
    <section class="existing-posts">
      <h1>پست های موجود</h1>
      <PostList isAdmin />
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
</style>