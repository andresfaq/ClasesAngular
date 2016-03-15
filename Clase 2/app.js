(function(){

var app = angular.module('store', []);


	app.controller('StoreCtrl',function(){
		
		this.products = gem;		
		
	});	

	app.controller('PanelCtrl',function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};


	app.controller('ReviewController',function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
		};


	});



	});
	
	var gem = [{	
			name: 'Dodecahedron',
			price: 2.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
			images: [
						{
							full: 'full.png',
							thumb: 'thumb.png',
						},
						{
							thumb: 'thumb.png',
							full: 'full.png',							
						}],
			reviews: [{
							stars: 5,
							body: "I love this shit",
							author:"joe@thomas.com"	
						},
						{
							stars: 1,
							body: "this product is something",
							author: "hello@thomas.com"	
						}]		
			},
			/*{	
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
			images: [
						{
							full: 'full.png',
							full: 'thumb.png',
						}
					],
			reviews: [
						{
							stars: 5,
							body: "I love this shit",
							author:"joe@thomas.com"	
						},
						{
							stars: 1,
							body: "this product is something",
							author: "hello@thomas.com"
						}
					 ]
					 		  
			}*/
			]
			
	
})();


