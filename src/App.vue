<template>
  <div id="app">
    <div class="container" ref="formContainer">
    
      <div id="nav">
        <Navigation v-bind:navigationNone="true" />          
      </div>  


      <div id="form-wrap">
        <router-view/>        
      </div>


      <div id="cart-wrap" class="cart-wrap">
        <Cart />
      </div>

    </div>

  </div>
</template>


<script>
  import Cart from './components/Cart.vue'
  import Navigation from './components/Navigation.vue'
  
  export default {
    name: 'app',
    components: { Cart, Navigation }
  }
</script>


<style lang="scss">
@import './styles/index.scss';
</style>
