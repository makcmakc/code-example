<template>
	<div>
        <ul>
          <router-link to="/" id="shipping">Shipping</router-link>

          <div class="arrow">
           <span class="uno"></span>
           <span class="dos"></span>
          </div>

          <router-link to="/billing" id="billing">Billing</router-link>

          <div class="arrow-2">
           <span class="tres"></span>
           <span class="quatro"></span>
          </div>         

          <router-link to="/payment" id="payment">Payment</router-link>
        </ul>		
	</div>
</template>


<script>
	export default {
		name: 'navigation',
	};
</script>


<style>
	.none {
    display: none;
  }
  .navigation-block {
    display: block;
  }  
</style>