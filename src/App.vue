<template>
  <div id="app">
    <Vheader></Vheader>
    <router-view/>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-chalk/index.css';
import Vheader from './components/Vheader'
export default {
  name: 'App',
  components:{
    Vheader
  }
}
</script>

<style>

</style>
