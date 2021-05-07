<template>
  <div class="home-page">
    <section class="intro">
      <h1>آخرین اخبار تکنولوژی</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  // asyncData execute on the server
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
  // data () {
  //   return {
  //     loadedPosts: [
  //       {
  //         id: '1',
  //         title: 'پست شماره ۱',
  //         thumbnailLink: 'https://www.bbva.com/wp-content/uploads/2017/08/innovacion-bbva-100817-1024x551.jpg',
  //         previewText: 'محتوای شماره 1'
  //       },
  //       {
  //         id: '2',
  //         title: 'پست شماره ۲',
  //         thumbnailLink: 'https://mlmuuous6dwe.i.optimole.com/DfwWcdQ-JK5kWYU6/w:362/h:181/q:auto/https://technation.io/wp-content/uploads/2017/11/91F5041A-B5D4-4648-AA55-C39A0DBBAAC3.jpeg',
  //         previewText: 'محتوای شماره ۲'
  //       },
  //       {
  //         id: '1',
  //         title: 'پست شماره ۳',
  //         thumbnailLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKimrjFWdSL-1d7EGY0excHnxtFU0AN29WNw&usqp=CAU',
  //         previewText: 'محتوای شماره ۳'
  //       }
  //     ]
  //   }
  // },
}
</script>

<style>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('~/assets/images/main-page-background.jpg');
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
</style>
