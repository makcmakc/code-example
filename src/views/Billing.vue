<template>
	<div>
		<form class="form" v-on:submit.prevent="onSubmit">

			<div class="page-title">Billing Information</div>
			
				<div class="form-group">
			<h5>Billing Contact</h5>
				<input 
					autocomplete="on" 
					type="text" 
					placeholder="Full Name" 
					id="getName" 
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
				</div>						
			
				<div class="form-group">
				<input 
					placeholder="Email" 
					data-id="Email"
					class="email form-control" 
					v-model.trim="email"
					:class="{'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }">

					<div class="valid-feedback">Your Email is vaild!</div>	

					<div class="invalid-feedback">
						<span v-if="!$v.email.required">Email is required</span>
						<span v-if="!$v.email.email">Email is not valid</span>
						<span v-if="!$v.email.isUnique && $v.email.email">This Email is already registered</span>
					</div>	
				</div>			

			<h5>Billing Address</h5>
				<div class="form-group">		
				<input 
					type="text" 
					placeholder="Street Address" 
					id="getStreet" 
					data-id="Street"
					class="form-control"
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
					data-id="Address">
				</div>


				<div class="form-group">
				<input 
					type="text" 
					class="form-control" 
					placeholder="City"  
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
				<button type="submit" class="btn">Continue</button>
			</div>

		</form>	

		<div class="country">
			<Country />
		</div>

	</div>
</template>


<script>
import { mask } from 'vue-the-mask'
import Country from '../components/Country.vue'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

	export default {
		name: 'billing',
		data: () =>  ({
			firstname: '',
			email: '',
			street: '',
			city: '',
			country: '',
			zip: '',
			zipMask: "######"
		}),
		directives: {mask},
		validations: {
			firstname: {
				required,
				minLength: minLength(5),
				maxLength: maxLength(30)
			},
			email: {
				required,
				email,
				isUnique(value) {
					if (value === '') return true

					// eslint-disabled-next-line
					const emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

					return new Promise(resolve => {
						setTimeout(() => {
							resolve(emailRegex.test(value))
						}, 350 + Math.random() * 300)
					})
				}
			},
			street: {
				required
			},
			city: {
				required
			},
			country: {
				required
			},
			zip: {
				required,
				minLength: minLength(3)
			}						
		},
		components: { Country },
		methods: {
			onSubmit() {
				this.$v.$touch()
				if (this.$v.$invalid) {
					// alert('FAIL')
				} else {
					this.$router.push('/payment')	
				}
			}
		}
	};
</script>
