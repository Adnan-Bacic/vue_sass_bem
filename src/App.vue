<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components:{
    Navbar: Navbar,
    Footer: Footer
  }
}
</script>

<style lang="scss">
  //import the main file
  @import 'styles/main.scss';
</style>
