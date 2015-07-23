var app = app || {};

$(function() {
	'use strict';
	
	var Router = Backbone.Router.extend({
		root: '/',
		
		routes: {
			"": "indexView",
			"vote": "voteView",
			"results": "resultsView",
			"*notFound": "indexView"
		},

		indexView: function() {			
			new app.IndexView();
		},
		
		resultsView: function() {			
			new app.ResultsView();
		},
		
		voteView: function() {				
			new app.VoteView({ model: app.voteModel });
		}
	});
	
	app.Router = new Router();
	
	Backbone.history.start();
	
	/*Backbone.history.start({
		pushState: true, 
		root: app.Router.root
	});*/
});


// ----- MOVE THE STUFF BELOW THIS LINE INTO APPROPRIATE PLACES!


// Bypass router for anchors with data-bypass="true" data attribute
$(document).on("click", "a[href]:not([data-bypass])", function(evt) {
	var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
	var root = location.protocol + "//" + location.host + app.root;

	if (href.prop.slice(0, root.length) === root) {
		evt.preventDefault();
		Backbone.history.navigate(href.attr, true);
	}
});