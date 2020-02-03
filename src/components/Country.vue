<template>
	<div class="form-control">
	
		<v-select
			class="country" 
			:options="countres"
			placeholder="Country">
		</v-select>

	</div>	
</template>


<script>
import CountryService from '../services/CountryService.js'
	export default {
		name: 'country-list',
		computed: {
			countres() {
				return this.$store.getters.getCountres
			}
		},
		created() {
			this.$store.dispatch('loadCountres', CountryService.countres)
		}	
	};
</script>


<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

.vs__dropdown-menu {
	top: -290px;
}

.vs__search::placeholder {
    text-indent: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #757575;
}

.vs__selected {
	text-indent: 10px;
}
</style>
