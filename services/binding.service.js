"use strict";
databinding.handleEventService = (function(){	//Event Binding
	var eventBind = function(eventName, elem){
		var element = $(elem);
		var currentEvent = databinding.eventsJSON[eventName];
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
		var request = new Request('data/data.json', {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json'
			})
		});
		fetch(request).then(function(response) {
			return response.json();
		}).then(function(j) {
			databinding.handleDataBindingService.dataBind(element, currentEvent, j);
		});
		}
		return{
			eventBind : eventBind
		}
	})();

databinding.handleDataBindingService = (function(){ //Data-Binding
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