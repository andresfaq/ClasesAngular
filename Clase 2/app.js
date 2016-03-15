(function(){

var app = angular.module('store', []);


	app.controller('StoreCtrl',function(){
		
		this.products = gem;		
		
	});	
	
	var gem = [{	
			name: 'Dodecahedron',
			price: 2.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false, 
			},
			{	
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false, 
			}];
	
})();


