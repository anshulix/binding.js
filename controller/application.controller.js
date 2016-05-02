"use strict";
(function(db, w){
	var request = new Request('data/events.json', {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	});
	fetch(request).then(function(response) {
		return response.json();
	}).then(function(j) {
		db.eventsJSON = j;
		var elements = document.getElementsByClassName('cb-events');
		var length = elements.length;
		for(var i = length; i--; i >= 0){
		if(elements[i].attributes.getNamedItem('cb-event-name') && !elements[i].attributes.getNamedItem('cb-data-bind')){
			var bindEvent = elements[i].prop('cb-event-name');
			db.handleEventService.eventBind(bindEvent, elements[i]);
		}
		else if(elements[i].attributes.getNamedItem('cb-event-name') && elements[i].attributes.getNamedItem('cb-data-bind')){
			var bindEvent = elements[i].attributes.getNamedItem('cb-event-name').value;
			db.handleEventService.eventBind(bindEvent, elements[i]);
			}
		}
	});
})(databinding, window);
