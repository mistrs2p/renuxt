<template>
  <div class="single-post-page">
    <section class="post">
      <h1>{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">آخرین بروزرسانی در {{ loadedPost.updatedDate}}</div>
        <div class="post-detail">نوشته شده توسط {{ loadedPost.author }}</div>
      </div>
      <p>{{ loadedPost.content}}</p>
    </section>
    <section class="post-feedback">
      <p>نظر خود را راجع به این پست به نشانی <a href="mailto:mahdimousavi40@gmail.com">Mahdimousavi40@gmail.com </a>ارسال کنید.</p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: '1',
          title: 'پست شماره ۱ با شماره ID:' + context.params.id,
          // title: 'پست شماره ۱ با شماره ID:' + context.route.params.id,
          thumbnailLink: 'https://www.bbva.com/wp-content/uploads/2017/08/innovacion-bbva-100817-1024x551.jpg',
          author: 'مهدی',
          updatedDate: new Date(),
          content: 'این محتوای خیلی خفنه باحالیه که داریم. بهترین محتوای قرن!!!',
          previewText: 'محتوای شماره 1'
        },
      })
    }, 1000)
  }
}
</script>

<style scoped>
  .single-post-page {
    /* direction: rtl;
    font-family: 'IranSans';
    font-weight: 400; */
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