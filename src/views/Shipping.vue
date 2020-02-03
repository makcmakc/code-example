<template>
	<div>

		<form class="form" v-on:submit.prevent="onSubmit">

			<div class="page-title">Shipping Info</div>

			<h5>Recipient</h5>
				<input 
					type="text" 
					placeholder="Full Name" 
					id="name" 
					data-id="Name" 
					class="form-control" 
					v-model.trim="$v.firstname.$model"
					:class="{'is-invalid':$v.firstname.$error, 'is-valid':!$v.firstname.$invalid }">

					<div class="valid-feedback">Your first name is vaild!</div>

					<div class="invalid-feedback">
						<span v-if="!$v.firstname.required">First name is required.</span>
						<span v-if="!$v.firstname.minLength">First name must have at least {{ $v.firstname.$params.minLength.min}} letters.</span>							
						<span v-if="!$v.firstname.maxLength">First name must have at most {{ $v.firstname.$params.maxLength.max}} letters.</span>							
					</div>						

			<div class="form-group">
				<input 
					type="text" 
					class="form-control phone" 
					placeholder="Daytime Phone"
					v-mask="phoneMask"
					v-model.trim="$v.phone.$model"
					:class="{'is-invalid':$v.phone.$error, 'is-valid':!$v.phone.$invalid }">
					
					<div class="valid-feedback">Phone Number is vaild!</div>

					<div class="invalid-feedback">
						<span v-if="!$v.phone.required">Phone Number is required.</span>
					</div>
			</div>


				<small class="phone-notice">For delivery questions only</small>

			<h5>Address</h5>	
			<div class="form-group">	
				<input 
					class="form-control"
					type="text" 
					placeholder="Street Address" 
					id="street" 
					data-id="Street"
					v-model.trim="$v.street.$model"
					:class="{'is-invalid':$v.street.$error, 'is-valid':!$v.street.$invalid }">

					<div class="valid-feedback">Street is vaild!</div>

					<div class="invalid-feedback">
						<span v-if="!$v.street.required">Street Address is required.</span>
					</div>
				</div>

				<div class="form-group">
				<input 
					type="text" 
					placeholder="Apt, Suite, Bldg, Gate Code (optional)" 
					id="address" 
					data-id="Address">
				</div>

				<div class="form-group">
				<input 
					type="text" 
					placeholder="City" 
					class="form-control city" 
					id="city" 
					data-id="City"
					v-model.trim="$v.city.$model"
					:class="{'is-invalid':$v.city.$error, 'is-valid':!$v.city.$invalid }">

					<div class="valid-feedback">City is vaild!</div>

					<div class="invalid-feedback">
						<span v-if="!$v.city.required">City is required.</span>
					</div>
				</div>
		

				
				<div class="small-field-zip">
					<div class="form-group">
					<input 
						type="text" 
						placeholder="ZIP" 
						class="form-control zip" 
						v-mask="zipMask"
						v-model.trim="$v.zip.$model"
						:class="{'is-invalid':$v.zip.$error, 'is-valid':!$v.zip.$invalid }">

						<div class="valid-feedback">Zip is vaild!</div>

						<div class="invalid-feedback">
							<span v-if="!$v.zip.required">Zip is required.</span>
							<span v-if="!$v.zip.minLength">Zip must have at least {{ $v.zip.$params.minLength.min}} numbers.</span>	
						</div>					
					</div>
				</div>

			<div class="btn-wrap">
				<button type="submit" class="btn" id="submit-btn">Continue</button>
			</div>
		</form>	
		

		<div class="country">
			<Country />
		</div>

	</div>
</template>


<script>
	import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
	import { mask } from 'vue-the-mask'
	import Country from '../components/Country.vue'

	export default {
		name: 'shipping',
		data: () => ({
			firstname: '',
			phone: '',
			street: '',
			city: '',
			//country: '',
			zip: '',
			phoneMask: "+#(###)-###-##-##",
			zipMask: "######"
		}),
		directives: {mask},
		components: { Country },
		validations: {
			firstname: {
				required,
				minLength: minLength(5),
				maxLength: maxLength(30)
			},
			street: {
				required
			},
			city: {
				required
			},
			/*country: {
				required
			},*/
			zip: {
				required,
				minLength: minLength(3)
			},
			phone: {
				required,
				numeric
			}												
		},	
		methods: {
			onSubmit() {		
				this.$v.$touch()
				if (this.$v.$invalid) {
					// alert('FAIL')
				} else {
					this.$router.push('/billing')	
				}			
			}
		}
	};
</script>


<style lang="scss">

</style>
