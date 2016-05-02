"use strict";
databinding.handleEventService = (function(){	//Event Binding
	var eventBind = function(eventName, element){
		var currentEvent = databinding.eventsJSON[eventName];
		if(currentEvent.event_type == 'click'){
			element.addEventListener("click", function( e ) {
				var target = e.target || e.srcElement
				eventTrigger(target, currentEvent);
			}, false);
		}
		if(currentEvent.event_type == 'change'){
			element.addEventListener("change", function( e ) {
				var target = e.target || e.srcElement
				eventTrigger(target, currentEvent);
			}, false);
		}
	}
	var eventTrigger  = function(element, currentEvent){
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
				element.insertAdjacentHTML('afterend', '<li>'+response.navlist[i]+'</li>');
			}
		}
		if(currentEvent.fire_event[0].event == 'changeColor'){	
				element.setAttribute('style', 'color:'+currentEvent.fire_event[0].value);
		}

	}
	return{
		dataBind : dataBind
	};
})();