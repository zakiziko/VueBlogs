<template>
  <div>
    <Header-app></Header-app>
    <br>
    <div class="container">
        <router-view></router-view>
    </div>   
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components : {
    'Header-app':Header
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
