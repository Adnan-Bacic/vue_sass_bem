<template>
  <div class="contact">
    <section class="form">
      <form class="form__form" v-on:submit.prevent="submitForm()">
        <h1 class="form__title">Get in touch here</h1>
        <label for="name" class="form__label">Name</label>
        <input type="text" placeholder="Name" id="name" class="form__input--text" v-model="name">
        <button type="submit" class="button form__btn--submit">Send</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      name: null
    }
  },

  methods:{
    submitForm(){
      if(this.name){
        alert('Your name is: ' + this.name);
      } else {
        alert('You didnt type a name');
      }
    }
  }
}
</script>
