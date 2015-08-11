var app = app || {};

$(function() {
	'use strict';
	
	app.Element = $('#app');
	
	var Router = Backbone.Router.extend({
		root: '/',
		
		routes: {
			"": "indexView",
			"vote": "voteView",
			"results": "resultsView",
			"*notFound": "indexView"
		},
		
		showView: function(view) {
			app.Element.html(view.render().el);
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
});