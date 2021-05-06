<template>
  <div class="single-post-page">
    <section class="post">
      <h1>عنوان پست</h1>
      <div class="post-details">
        <div class="post-detail">آخرین بروزرسانی در XXX</div>
        <div class="post-detail">نوشته شده توسط اسم شخصر</div>
      </div>
      <p>محتوای پست</p>
    </section>
    <section class="post-feedback">
      <p>نظر خود را راجع به این پست به نشانی <a href="mailto:mahdimousavi40@gmail.com">Mahdimousavi40@gmail.com</a>ارسال کنید.</p>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>