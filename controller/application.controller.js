"use strict";
$(document).ready(function(){
				cbTree.ajaxService.ajaxCall('data/events.json');
				cbTree.eventsJSON = cbTree.response;
				var elements = document.getElementsByClassName('cb-events');
				var length = elements.length;
				for(var i = length; i--; i >= 0){
					if(elements[i].attributes.getNamedItem('cb-event-name') && !elements[i].attributes.getNamedItem('cb-data-bind')){
						var bindEvent = elements[i].prop('cb-event-name');
						cbTree.handleEventService.eventBind(bindEvent, elements[i]);
					}
					else if(elements[i].attributes.getNamedItem('cb-event-name') && elements[i].attributes.getNamedItem('cb-data-bind')){
						var bindEvent = elements[i].attributes.getNamedItem('cb-event-name').value;
						cbTree.handleEventService.eventBind(bindEvent, elements[i]);
					}
				}
	});