<template>
  <div class="home-page">
    <section class="intro">
      <h1>آخرین اخبار تکنولوژی</h1>
    </section>
    <section class="featured-posts">
      <PostPreview 
        id="1"
        title="سلاملکم"
        thumbnail="https://www.paymentsjournal.com/wp-content/uploads/2019/11/904-scaled.jpg"
        previewText="این اولین پستمه"
      />
      <PostPreview 
        id="2"
        title="چطوری"
        thumbnail="https://sm.mashable.com/mashable_in/seo/1/13445/13445_5s8f.jpg"
        previewText="این دومیشه"
      />
      <PostPreview 
        id="3"
        title="خوبی"
        thumbnail="https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"
        previewText="سومیش اینه"
      />
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }

  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  </style>
