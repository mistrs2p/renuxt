<template>
  <section class="posts-list">
    <PostPreview
      :is-admin="isAdmin" 
      id="1"
      title="سلاملکم"
      thumbnail="https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg"
      previewText="این اولین پستمه"
    />
    <PostPreview
      :is-admin="isAdmin" 
      id="2"
      title="چطوری"
      thumbnail="https://sm.mashable.com/mashable_in/seo/1/13445/13445_5s8f.jpg"
      previewText="این دومیشه"
    />
    <PostPreview
      :is-admin="isAdmin" 
      id="3"
      title="خوبی"
      thumbnail="https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"
      previewText="سومیش اینه"
    />
  </section>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .posts-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>