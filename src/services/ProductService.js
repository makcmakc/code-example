import Vue from 'vue'

export default new Vue({
	data: {
		products : [
			{
				id : 1,
				title : 'Chelsi',
				price : 25,
				color : 'Brown',
				quantity : 1,
				image : "../img/1.jpg"
			},
			{
				id: 2,
				title : 'T-Shirt',
				price : 20,
				color : 'Black',
				quantity : 2,
				image :  "../img/2.jpg"		
			},
			{
				id: 3,
				title : 'Bag',
				price : 22,
				color : 'Black',
				quantity : 1,				
				image : "../img/3.jpg"
			}				
		]
	}
});
