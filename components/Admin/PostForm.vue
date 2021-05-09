<template>
  <form @submit.prevent="onSave">
    <UIAppControlInput v-model="editedPost.author">نام نویسنده</UIAppControlInput>
    <UIAppControlInput v-model="editedPost.title">عنوان</UIAppControlInput>
    <UIAppControlInput v-model="editedPost.thumbnailLink">لینک عکس</UIAppControlInput>
    <UIAppControlInput
      control-type="textarea"
      v-model="editedPost.content">محتوا</UIAppControlInput>
    <UIAppButton type="submit">ذخیره</UIAppButton>
    <UIAppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">صرف نظر</UIAppButton>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      editedPost: this.post 
        ? { ...this.post } 
        : {
          author: '',
          title: '',
          thumbnailLink: '',
          content: ''
        }
    }
  },
  methods: {
    onSave () {
      // console.log(this.editedPost)
      this.$emit('submit', this,this.editedPost)
    },
    onCancel () {
      this.$router.push('/admin')
    }
  }
}
</script>

<style>

</style>