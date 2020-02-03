<template>
	<div>
		<form class="form">
			<h3>Thank you for your order!</h3>
			<h4>Order Number is: <span id="order-number"> {{ orderNumber }}</span></h4>
			<p>You will recieve an email confirmation <br> shortly to <span id="email-confirm">{{ email }}</span></p>

			<div class="whitespace"></div>

			<p>Estimated delivery Day is</p>
			<h4 id="delivery_date">{{ date  | date('date') }}</h4>
			<span class="print" v-on:click="print()">Print Recipe</span>
		</form>
	</div>
</template>


<script>

	export default {
		name: 'success',
		data: () => ({
			email: localStorage.getItem('Email'),
			orderNumber: '',
			date: new Date()
		}),
		methods: {
			getRandom(){
				return Math.round(9 * Math.random())
			},
			print() {
				window.print();
			},
		},	
		mounted() {	
			const arr = []
			for( var i = 0; i < 9; i++){
				arr.push(this.getRandom())
			}
			return this.orderNumber = arr.join('')
		}
	};
</script>

