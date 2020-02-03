<template>
	<div>
		<div class="purchase">
			<img :data-src="product.image" v-lazyload>
			<span class="name">{{ product.title }}</span>
			<span class="color">{{ product.color }}</span>
			<span class="quantity">Quantity: {{ product.quantity }}</span>
			<span class="price">${{ product.price }}</span>
		</div>
		<hr>		
	</div>
</template>


<script>
	import lazyload from '@/directives/lazyload'
	export default {
		name: 'product',
		props: {
			product: {
				type: Object,
				require: true
			}
		},
		directives: {
			lazyload
		}
	};
</script>


<style>
	
</style>