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
		
		appElement: $('#app'),
		
		currentView: false,
		showView: function(view) {
			this.currentView = view;
			this.appElement.html(this.currentView.render().el);
		},

		indexView: function() {			
			app.indexView = new app.IndexView();
			this.showView(app.indexView);
		},
		
		resultsView: function() {
			app.resultsView = new app.ResultsView();
			this.showView(app.resultsView);
		},
		
		voteView: function() {
			app.voteView = new app.VoteView();	
			this.showView(app.voteView);
		}
	});
	
	app.router = new Router();
	
	Backbone.history.start();
	
	/*Backbone.history.start({
		pushState: true, 
		root: app.Router.root
	});*/
});

// Bypass router for anchors with data-bypass="true" data attribute
$(document).on("click", "a[href]:not([data-bypass])", function(evt) {
	var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
	var root = location.protocol + "//" + location.host + app.root;

	if (href.prop.slice(0, root.length) === root) {
		evt.preventDefault();
		Backbone.history.navigate(href.attr, true);
	}
});