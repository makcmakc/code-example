<template>
	<div>
		<h4>Order Summary</h4>

		<div class="edit">
			<p>edit order</p>
		</div>

		<div class="cart-items">
			<Product v-for="product of products" v-bind:product="product" v-bind:key="product.id" />
		</div>

		<p>Subtotal</p>
			<span class="price subtotal">${{ subTotal }}</span>
		<p>Shipping</p>
			<span class="price shipping" v-if="shipping == 0">Free</span>
			<span class="price shipping" v-else>${{ shipping }}</span>
		<p>Taxes</p>
			<span class="price taxes">${{ taxes }}</span>

		<hr>

		<div class="total">
			<p style="color: #5B1295;  font-weight: 600;">Total</p>
			<span class="price summary">${{  total }}</span>  
		</div>		
	</div>
</template>


<script>
	import Product from './Product.vue'
	import ProductService from '../services/ProductService.js'
	export default {
		name: 'cart',
		components: { Product },
		data() {
			return {
				shipping: 0,
				taxes: 12,
				subTotal: 0,
				total: 0
			}
		},
		mounted() {
			this.products.map(item => {
				this.subTotal += item.price * item.quantity;
				this.total = this.subTotal + this.shipping + this.taxes
			})
		},
		computed: {
			products() {
				return this.$store.getters.getProducts
			}
		},
		created() {
			this.$store.dispatch('loadProducts', ProductService.products)
		}		
	};
</script>


<style>
	
</style>

