"use strict";
cbTree.ajaxService = (function(){
	cbTree.response;
	var ajaxCall = function(ajaxUrl){
	var jqxhr = $.ajax({
	  url: ajaxUrl,
	  method: "GET",
	  dataType: "json",
	  async: false
	});
	 
	jqxhr.done(function(data) {
		cbTree.response = data;
	});
	 
	jqxhr.fail(function( e ) {
	  console.log( "Request failed: " + e );
	}); 
	}
	return{
		ajaxCall : ajaxCall
	};
})();