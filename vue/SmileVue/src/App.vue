<template>
  <div id="app">

    <router-view/>
    <n-video></n-video>
  </div>
</template>

<script>
import video from '@/components/component/video'
export default {
  name: 'App',
  components: {
    'n-video': video
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
