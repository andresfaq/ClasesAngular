(function () {

var app = angular.module('store', ['store-products']);

    // CONTROLADORES

	app.controller('StoreCtrl',['$http',function($http){
		var store = this;
        store.products = [];		
        
        $http.get('products.json').success(function(data){            
            store.products = data;            
        }); 
        
		
	}]); // Fin StoreCtrl

    
    
    app.controller('ReviewController',function(){
		this.review = {};

        this.addReview = function(product){
          product.reviews.push(this.review);
          this.review = {};
        };


	}); // Fin ReviewController
    		
	
})();


