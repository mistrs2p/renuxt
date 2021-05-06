<template>
  <div>
    <NavTheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <NavTheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <Nuxt />
  </div>
</template>
<script>
export default {
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>
<style>
html {
  font-family: IranSans;
  box-sizing: border-box;
  font-weight: 400;
}

*,
*::before,
*::after {
  direction: rtl;
  box-sizing: border-box;
  margin: 0;
}
</style>
