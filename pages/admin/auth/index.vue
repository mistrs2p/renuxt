<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
        <UIAppControlInput type="email">آدرس ایمیل</UIAppControlInput>
        <UIAppControlInput type="password">رمز عبور</UIAppControlInput>
        <UIAppButton type="submit">{{ isLogin ? 'ورود' : 'ثبت نام' }}</UIAppButton>
        <UIAppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">تغییر به {{ isLogin ? 'ثبت نام' : 'ورود' }}</UIAppButton>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  // layout: 'admin',
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>

