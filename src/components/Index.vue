<template>
<div class="index">
  <section class="hero">
        <h1 class="hero__title">Web developer</h1>
        <p class="hero__subtitle">Adnan Bacic</p>
        <router-link :to="{ name: 'Contact'}" class="hero__btn__container">
          <button class="button hero__btn--hero">Contact</button>
        </router-link>
  </section>
  <section class="work">
    <h2 class="work__title">Some of my work</h2>
    <div class="card">
      <div class="card__title">Politician tweets</div>
      <img class="card__image" src="../assets/p1.png">
      <p class="card__text">In this project i worked with Twitters API to show tweets from danish politicians.</p>
      <a href="https://adnanbacic.dk/folders/coding/politiker-tweet/" target="_blank">
        <button class="button card__btn--work">See project</button>
      </a>
    </div>

    <div class="card">
      <div class="card__title">Smoothies in firebase</div>
      <img class="card__image" src="../assets/p2.png">
      <p class="card__text">In this project i worked with Vue and Firebase to be able to Create, Read, Update and Delete smoothies.</p>
      <a href="https://adnanbacic.dk/folders/vue/vue_ninja_smoothies/#/" target="_blank">
        <button class="button card__btn--work">See project</button>
      </a>
    </div>

    <div class="card">
      <div class="card__title">Webshop in Wordpress</div>
      <img class="card__image" src="../assets/p3.png">
      <p class="card__text">In this project i made a webshop in Wordpress with the WooCommeerce plugin.</p>
      <a href="http://adnanbacic.dk/folders/wordpress/webshop/" target="_blank">
        <button class="button card__btn--work">See project</button>
      </a>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      
    }
  }
}
</script>