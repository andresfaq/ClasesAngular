(function () {

var app = angular.module('store', ['store-products']);

    // CONTROLADORES

	app.controller('StoreCtrl',['$http',function($http){
		var store = this;
        store.products = [];
		//this.products = gem;	
        
        $http.get('products.json').success(function(data){            
            store.products = data;            
        }); 
        
		
	}]);	 // Fin SttoreCtrl

    
    
    app.controller('ReviewController',function(){
		this.review = {};

        this.addReview = function(product){
          product.reviews.push(this.review);
          this.review = {};
        };


	}); // Fin ReviewController
    
    
    // DIRECTIVAS   
        

    
    
    
	
	var gem = [{	
			name: 'Dodecahedron',
			price: 2.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
			images: [{
							full: 'full.png',
							thumb: 'thumb.png',
					 },
					 {
							thumb: 'thumb.png',
							full: 'full.png',							
					 }], // Fin images
        
			reviews: [{
							stars: 5,
							body: "I love this shit",
							author:"joe@thomas.com"	
					  },
					  {
							stars: 1,
							body: "this product is something",
							author: "hello@thomas.com"	
					  }]// Fin reviews		
			             
                },
               {	
			name: 'Otro producto',
			price: 2.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
			images: [{
							full: 'thumb.png',
							thumb: 'full.png',
					 },
					 {
							thumb: 'full.png',
							full: 'thumb.png',							
					 }], // Fin images
        
			reviews: [{
							stars: 5,
							body: "I love this shit",
							author:"joe@thomas.com"	
					  },
					  {
							stars: 1,
							body: "this product is something",
							author: "hello@thomas.com"	
					  }]// Fin reviews		
			             
                }
              
              
              ] // Fin gem
			
	
})();


