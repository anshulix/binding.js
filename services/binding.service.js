"use strict";
cbTree.handleEventService = (function(){	//Event Binding
	var eventBind = function(eventName, that){
		var element = $(that);
		var currentEvent = cbTree.eventsJSON[eventName];
		if(currentEvent.event_type == 'click'){
			element.on('click', function(){
					eventTrigger(this, currentEvent);
			});
		}
		if(currentEvent.event_type == 'change'){
			element.on('change', function(){
					eventTrigger(this, currentEvent);			
			});
		}
	}
	var eventTrigger  = function(that, currentEvent){
		var element = $(that);
		cbTree.ajaxService.ajaxCall(currentEvent.event_url);
		var responseOfRestCall = cbTree.response;
		cbTree.handleDataBindingService.dataBind(element, currentEvent, responseOfRestCall);
	}
	return{
		eventBind : eventBind
	}
})();

cbTree.handleDataBindingService = (function(){ //Data-Binding
	var dataBind  = function(element, currentEvent, response){
		if(currentEvent.response_type[1].type == 'list'){
			for(var i in response[currentEvent.response_type[1].response_value]){
				element.append('<li>'+response.navlist[i]+'</li>');
			}
		}
		if(currentEvent.fire_event[0].event == 'changeColor'){	
				element.css('color' , currentEvent.fire_event[0].value);
		}

	}
	return{
		dataBind : dataBind
	};
})();