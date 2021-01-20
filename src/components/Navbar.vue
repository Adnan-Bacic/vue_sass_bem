<template>
  <div class="navbar">
      <ul class="nav">
          <li class="nav__item">
              <router-link :to="{ name: 'Index' }" class="nav__item--home">Home</router-link>
          </li>
          <li class="nav__item">
              <router-link :to="{ name: 'Contact' }" class="nav__item--navitem">Contact</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  //import the main file
  @import '../styles/main.scss';
</style>
